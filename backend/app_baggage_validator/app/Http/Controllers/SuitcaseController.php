<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use App\Models\Suitcase;
use Illuminate\Http\Request;

class SuitcaseController extends Controller
{
    public function __construct(Suitcase $suitcase)
    {
        $this->suitcase = $suitcase;
    }

    public function index()
    {
        $suitcases = $this->suitcase->paginate(10)->all();
        return response()->json($suitcases);
    }

    public function store(Request $request)
    {
        $request->validate($this->suitcase->rules());

        $image = $request->file('image');
        $image_url = $image->store('images/suitcases', 'public');

        $suitcase = $this->suitcase->create([
            'description' => $request->description,
            'weight' => $request->weight,
            'color' => $request->color,
            'image' => $image_url,
            'dimension' => $request->dimension,
            'protocol_trip' => $request->protocol_trip,
            'tag_id' => $request->tag_id
        ]);

        return response()->json($suitcase, 201);
    }

    public function show($id)
    {
        $suitcase = $this->suitcase->find($id);

        if ($suitcase === null) {
            return response()->json(['erro' => 'Suitcase not found.'], 404);
        }

        return response()->json($suitcase, 200);
    }

    public function update(Request $request, int $id)
    {
        $suitcase = $this->suitcase->find($id);

        if ($suitcase === null) {
            return response()->json(['erro' => 'Suitcase not found.'], 404);
        }

        if ($request->file('image')) {
            Storage::disk('public')->delete($suitcase->image);
            $request->validate($suitcase->rules());

            $imagem = $request->file('image');
            $imagem_url = $imagem->store('images/suitcases', 'public');
            $suitcase->image = $imagem_url;
        } else {
            $rulesDinamic = array();
            foreach ($suitcase->rules() as $input => $rule) {
                if (array_key_exists($input, $request->all())) {
                    $rulesDinamic[$input] = $rule;
                }
            }
            $request->validate($rulesDinamic);
        }
        $suitcase->fill($request->all());
        $suitcase->save();

        return response()->json($suitcase, 200);
    }

    public function destroy(int $id)
    {
        $suitcase = $this->suitcase->find($id);

        if ($suitcase === null) {
            return response()->json(['erro' => 'Suitcase not found.'], 404);
        }

        Storage::disk('public')->delete($suitcase->imagem);

        $suitcase->delete();
        return response()->json(['msg' => 'Suitcase removed successfully!'], 200);
    }
}

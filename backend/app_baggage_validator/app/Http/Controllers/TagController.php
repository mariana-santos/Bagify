<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function __construct(Tag $tag)
    {
        $this->tag = $tag;
    }

    public function index()
    {
        $tags = $this->tag->paginate(10)->all();
        return response()->json($tags);
    }

    public function store(Request $request)
    {
        $request->validate($this->tag->rules());
        $image = $request->file('image');
        $image_url = $image->store('images/tags', 'public');
        $tag = $this->tag->create(['image' => $image_url]);
        return response()->json($tag, 201);
    }

    public function show($id)
    {
        $tag = $this->tag->find($id);
        if ($tag === null) {
            return response()->json(['erro' => 'Tag not found.'], 404);
        }
        return response()->json($tag, 200);
    }

    public function update(Request $request, int $id)
    {
        $tag = $this->tag->find($id);
        if ($tag === null) {
            return response()->json(['erro' => 'Tag not found.'], 404);
        }
        if ($request->file('image')) {
            Storage::disk('public')->delete($tag->image);
            $request->validate($tag->rules());

            $imagem = $request->file('image');
            $imagem_url = $imagem->store('images/tags', 'public');
            $tag->image = $imagem_url;
        } else {
            $rulesDinamic = array();
            foreach ($tag->rules() as $input => $rule) {
                if (array_key_exists($input, $request->all())) {
                    $rulesDinamic[$input] = $rule;
                }
            }
            $request->validate($rulesDinamic);
        }
        $tag->fill($request->all());
        $tag->save();
        return response()->json($tag, 200);
    }

    public function destroy(int $id)
    {
        $tag = $this->tag->find($id);
        if ($tag === null) {
            return response()->json(['erro' => 'Tag not found.'], 404);
        }
        Storage::disk('public')->delete($tag->imagem);
        $tag->delete();
        return response()->json(['msg' => 'Tag removed successfully!'], 200);
    }
}

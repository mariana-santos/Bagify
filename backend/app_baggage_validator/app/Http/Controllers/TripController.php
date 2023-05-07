<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use App\Models\Trip;
use Illuminate\Http\Request;

class TripController extends Controller
{
    public function __construct(Trip $trip)
    {
        $this->trip = $trip;
    }

    public function index()
    {
        $trips = $this->trip->paginate(10)->all();
        return response()->json($trips);
    }

    public function store(Request $request)
    {
        $request->validate($this->trip->rules());

        $image = $request->file('image');
        $image_url = $image->store('images/trips', 'public');

        $trip = $this->trip->create([
            'protocol' => $request->protocol,
            'title' => $request->title,
            'description' => $request->description,
            'status_trip' => $request->status_trip,
            'destiny' => $request->destiny,
            'origin' => $request->origin,
            'ceiling' => $request->ceiling,
            'trip_coming' => $request->trip_coming,
            'trip_exit' => $request->trip_exit,
            'image_document' => $image_url,
            'user_id' => $request->user_id,
            'company_id' => $request->company_id
        ]);
        return response()->json($trip, 201);
    }

    public function show($id)
    {
        $trip = $this->trip->find($id);

        if ($trip === null) {
            return response()->json(['erro' => 'Trip not found.'], 404);
        }

        return response()->json($trip, 200);
    }

    public function update(Request $request, int $id)
    {
        $trip = $this->trip->find($id);

        if ($trip === null) {
            return response()->json(['erro' => 'Trip not found.'], 404);
        }

        if ($request->file('image')) {
            Storage::disk('public')->delete($trip->image);
            $request->validate($trip->rules());

            $imagem = $request->file('image');
            $imagem_url = $imagem->store('images/trips', 'public');
            $trip->image = $imagem_url;
        } else {
            $rulesDinamic = array();
            foreach ($trip->rules() as $input => $rule) {
                if (array_key_exists($input, $request->all())) {
                    $rulesDinamic[$input] = $rule;
                }
            }
            $request->validate($rulesDinamic);
        }
        $trip->fill($request->all());
        $trip->save();

        return response()->json($trip, 200);
    }

    public function destroy(int $id)
    {
        $trip = $this->trip->find($id);

        if ($trip === null) {
            return response()->json(['erro' => 'Trip not found.'], 404);
        }

        Storage::disk('public')->delete($trip->imagem);

        $trip->delete();
        return response()->json(['msg' => 'Trip removed successfully!'], 200);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function __construct(Customer $customer) {
        $this->customer = $customer;
    }

    public function index()
    {
        $customers = $this->customer->paginate(10)->all();
        return response()->json($customers);
    }

    public function store(Request $request)
    {
        $request->validate($this->customer->rules());

        $image = $request->file('image');
        $image_url = $image->store('images/customers', 'public');

        $customer = $this->customer->create([
            'name' => $request->name,
            'image' => $image_url,
            'email' => $request->email
        ]);

        return response()->json($customer, 201);
    }

    public function show($id)
    {
        $customer = $this->customer->find($id);

        if($customer === null) {
            return response()->json(['erro' => 'Customer not found.'], 404) ;
        }

        return response()->json($customer, 200);
    }

    public function update(Request $request, int $id)
    {
        $customer = $this->customer->find($id);

        if($customer === null) {
            return response()->json(['erro' => 'Customer not found.'], 404);
        }

        if($request->file('image')) {
            Storage::disk('public')->delete($customer->image);
            $request->validate($customer->rules());

            $imagem = $request->file('image');
            $imagem_url = $imagem->store('images/customers', 'public');
            $customer->image = $imagem_url;
        } else {
            $rulesDinamic = array();
            foreach($customer->rules() as $input => $rule) {
                if(array_key_exists($input, $request->all())) {
                    $rulesDinamic[$input] = $rule;
                }
            }
            $request->validate($rulesDinamic);
        }
        $customer->fill($request->all());
        $customer->save();

        return response()->json($customer, 200);
    }

    public function destroy(int $id)
    {
        $customer = $this->customer->find($id);

        if($customer === null) {
            return response()->json(['erro' => 'Customer not found.'], 404);
        }

        Storage::disk('public')->delete($customer->imagem);

        $customer->delete();
        return response()->json(['msg' => 'Customer removed successfully!'], 200);
    }
}

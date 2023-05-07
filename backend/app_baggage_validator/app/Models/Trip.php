<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'pnr',
        'ticket',
        'protocol',
        'description',
        'status_trip',
        'airline',
        'origin',
        'destiny',
        'trip_coming',
        'trip_exit',
        'image_document',
        'user_id',
        'company_id',
    ];

    public function rules(){
        return [
        'pnr' => 'required',
        'ticket' => 'required',
        'protocol' => 'required|min:3|max:50',
        'description' => 'required',
        'status_trip' => 'required',
        'airline' => 'required',
        'origin' => 'required',
        'destiny' => 'required',
        'trip_coming' => 'required',
        'trip_exit' => 'required',
        'image_document' => 'required|image|mimes:png,jpeg,jpg|max:2048',
        'user_id' => 'required',
        'company_id' => 'required',
        ];
    }
}

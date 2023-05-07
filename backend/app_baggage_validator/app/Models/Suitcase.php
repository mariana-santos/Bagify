<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Suitcase extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'description',
        'weight',
        'color',
        'image',
        'dimension',
        'protocol_trip',
        'tag_id'
    ];

    public function rules(){
        return [
        'description' => 'required|min:3|max:50',
        'weight' => 'required|numeric',
        'color' => 'required',
        'image' => 'required|image|mimes:png,jpeg,jpg|max:2048',
        'dimension' => 'required|numeric',
        'protocol_trip' => 'required',
        'tag_id' => 'required|numeric',
        ];
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'image',
    ];

    public function rules(){
        return ['image' => 'required|image|mimes:png,jpeg,jpg|max:2048'];
    }
}

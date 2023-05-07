<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['name','image','email'];

    public function rules(){
        return [
        'name' => 'required|min:3|max:50',
        'image' => 'required|image|mimes:png,jpeg,jpg|max:2048',
        'email' => 'required|email',
        ];
    }

    public function trips(){
        return $this->hasMany('App\Models\Trip');
    }
}

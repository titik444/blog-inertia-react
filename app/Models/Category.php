<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Category extends Model
{
    // use HasFactory;
    use SoftDeletes, HasSlug;

    // declare table name
    public $table = 'category';

    // declare fillable fields
    protected $fillable = [
        'title',
        'description',
    ];

    // one to many
    public function product()
    {
        return $this->hasMany('App\Models\Product', 'category_id');
    }

    // slug
    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}

<?php

namespace App\Http\Requests\Post;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => [
                'required', 'string',
            ],
            'category_id' => [
                'required', 'integer',
            ],
            'body' => [
                'required', 'string',
            ],
            'thumbnail' => [
                'nullable', 'image', 'mimes:jpeg,svg,png', 'max:10000',
            ],
            'featured' => [
                'boolean',
            ]
        ];
    }
}

<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class StoreUserRequest extends FormRequest
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
            'name' => [
                'required', 'string',
            ],
            'username' => [
                'required', 'alpha_dash:ascii', 'unique:users',
            ],
            'email' => [
                'required', 'email', 'unique:users',
            ],
            // 'password' => [
            //     'required', 'confirmed', Rules\Password::defaults()
            // ],
            'roles' => [
                'required', 'integer',
            ],
            'avatar' => [
                'nullable', 'image', 'mimes:jpeg,svg,png', 'max:10000',
            ],

        ];
    }
}

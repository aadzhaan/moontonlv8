<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Foundation\Http\FormRequest;
use Auth;

class Update extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'nullable|unique:movies,name,'.$this->movie->id,
            'category' => 'nullable',
            'thumbnail' => 'nullable|image',
            'video_url' => 'nullable|url',
            'rating' => 'nullable|numeric|min:0|max:10',
            'is_featured' => 'nullable|boolean'
        ];
    }
}

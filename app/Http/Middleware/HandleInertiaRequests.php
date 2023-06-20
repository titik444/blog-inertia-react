<?php

namespace App\Http\Middleware;

use App\Models\Category;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Redis;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Session;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'app' => [
                'name' => env('APP_NAME', 'APP NAME'),
            ],
            'auth' => [
                'user' => $request->user(),
            ],
            'footerCategories' => $this->getCategories(),
            'flashMessage' => [
                'message' => Session::get('message'),
                'type' => Session::get('type'),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }

    private function getCategories()
    {
        // $categories = Redis::get('list_category');

        // if (!$categories) {
        //     $categories = Category::orderBy('title')->get();

        //     Redis::set('list_category', $categories);
        // } else {

        //     $categories = json_decode($categories);
        // }

        return Category::orderBy('title')->get();
    }
}

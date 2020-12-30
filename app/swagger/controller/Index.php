<?php
declare (strict_types = 1);

namespace app\swagger\controller;
use think\facade\View;
class Index
{
    /** 
        * @OA\Info(title="Swagger API",version="2.0")
        */
    public function index()
    {
        return view(app()->getRootPath() . 'app' . DS . 'swagger' . DS . 'view' . DS . 'index.html');
    }
}

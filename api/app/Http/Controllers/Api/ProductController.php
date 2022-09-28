<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * 
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        //devuelve Product
        return $products;
    }

    /**
     * 
     *
     * @return \Illuminate\Http\Response
     */
    /*     public function create()
    {
        //
    }
 */
    /**
     * 
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    //metodo Product para guardarlo
    public function store(Request $request)
    {
        $product = new Product();
        //guarda en la tabla Products del campo x
        $product->nombre = $request->nombre;
        $product->precio = $request->precio;
        $product->stock = $request->stock;

        $product->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::find($id);
        return $product;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $product = Product::findOrFail($request->id);
        $product->nombre = $request->nombre;
        $product->precio = $request->precio;
        $product->stock = $request->stock;

        $product->save();

        //devolver producto
        return $product;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    //eliminar producto
    public function destroy($id)
    {
        $product = Product::destroy($id);
        return $product;
    }
}

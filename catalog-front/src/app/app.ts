import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Head } from "./head/head";
import { Foot } from "./foot/foot";
import { Item } from "./item/item";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Head, Foot, Item],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public items = [{
    nome: "a",
    desc: "bbbb",
    preco: 1.1
  },{
    nome: "a",
    desc: "bbbb",
    preco: 1.1
  },{
    nome: "a",
    desc: "bbbb",
    preco: 1.1
  },{
    nome: "a",
    desc: "bbbb",
    preco: 1.1
  },];
}

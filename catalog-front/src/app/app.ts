import { Component, signal } from '@angular/core';
import { Head } from "./head/head";
import { Foot } from "./foot/foot";
import { Item } from "./item/item";

@Component({
  selector: 'app-root',
  imports: [Head, Foot, Item],
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

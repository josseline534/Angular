import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-store';

  form = {
    name: '',
    email: '',
    password: '',
  };

  widthImg: number = 10;
  newName: string = '';
  person = {
    name: 'Jossy',
    lastName: ' Sanchez',
    age: 25,
  };
  btnDisabled: boolean = true;
  img = {
    src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Fvector-gratis%2Ficono-perfil-personas_24877-40756.jpg&f=1&nofb=1',
    alt: 'foto perfil',
    with: 100,
  };

  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      category: 'all',
      image: {
        name: '../assets/images/toy.jpg',
        width: 150,
      },
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: {
        name: '../assets/images/bike.jpg',
        width: 150,
      },
    },
    {
      name: 'Colección de albumnes',
      price: 34,
      image: {
        name: '../assets/images/album.jpg',
        width: 150,
      },
    },
    {
      name: 'Mis libros',
      price: 23,
      image: {
        name: '../assets/images/books.jpg',
        width: 150,
      },
    },
    {
      name: 'Gafas',
      price: 34,
      image: {
        name: '../assets/images/glasses.jpg',
        width: 150,
      },
    },
    {
      name: 'Casita',
      price: 23000,
      image: {
        name: '../assets/images/house.jpg',
        width: 150,
      },
    },
  ];

  names: string[] = ['Josseline', 'Melany', 'Nicol'];

  toogleButton = () => {
    this.btnDisabled = !this.btnDisabled;
  };

  increaseAge = () => {
    this.person.age++;
  };
  onScroll = (event: Event) => {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  };
  changeName = (event: Event) => {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  };
  addNames = () => {
    this.names.push(this.newName);
    this.newName = '';
  };
  deleteName = (index: number) => {
    this.names.splice(index, 1);
  };

  onRegister = () => {
    console.log(this.form);
  };
}

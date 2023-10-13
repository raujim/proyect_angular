import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute} from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ){}

  ngOnInit(){
    const routerParams =this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routerParams.get('productId'))
    this.product = products.find(product => product.id === productIdFromRoute)
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    console.log('Tu producto ha sido añadido con exito')
  }
  share(nombre:string) {
    window.alert('El producto' + nombre+'se ha compartido' );
  }
  onNotify(){
    window.alert('Se le notificara la compra exitosamente ');
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { EditModalService } from 'src/app/shared/services/edit-modal.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  isModalEnabled = false;
  constructor(private authService: AuthService,
              private editModal: EditModalService) { }

  ngOnInit(): void {
    this.editModal.onEditChange.subscribe(
      (res: boolean) => {
        this.isModalEnabled = res;
      }
    );
  }


  onScroll() {
    console.log('hi');
  }
}

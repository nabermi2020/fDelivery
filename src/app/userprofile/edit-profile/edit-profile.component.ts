import {Component, OnDestroy, OnInit} from '@angular/core';
import { EditModalService } from 'src/app/shared/services/edit-modal.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {AuthService} from '../../auth/services/auth.service';
import {User, UserDetails} from '../../auth/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit, OnDestroy {
  public editForm: FormGroup;
  public id: any;
  public currentUser: UserDetails;
  private userIdSubscription: Subscription;

  constructor(private editProfile: EditModalService,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.subscribeToUserInfoChanges();
  }

  private subscribeToUserInfoChanges(): void {
    this.userIdSubscription = this.route.firstChild.params.subscribe( (par: Params) => {
      this.id = par.id;
      this.currentUser = this.authService.getCurrentUserInfo();
      this.initForm();
    });
  }

  private initForm() {
    this.editForm = new FormGroup({
      firstName: new FormControl(this.currentUser.firstName),
      lastName: new FormControl(this.currentUser.lastName),
      phone: new FormControl(this.currentUser.phone),
      address: new FormControl(this.currentUser.address),
      passwords: new FormGroup({
        password: new FormControl(''),
        passwordRepeat: new FormControl(''),
      })
    });
  }

  public closeModal(): void {
    this.editProfile.toggleEditMode();
  }

  public saveChanges(): void {
    console.log('Sace changes!');
  }

  ngOnDestroy() {
    this.userIdSubscription.unsubscribe();
  }

}

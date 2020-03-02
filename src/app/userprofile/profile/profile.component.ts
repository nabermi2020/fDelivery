import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/auth/user.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Subscription } from 'rxjs';
import { EditModalService } from 'src/app/shared/services/edit-modal.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  private userIdSubscription: Subscription;
  private editModeSubscription: Subscription;
  public editMode = false;
  public id: number;
  public user: User;
  objectKeys = Object.keys;
  public userViewTemplate = {
    'First Name': '',
    'Last Name': '',
    'Login': '',
    'Phone': '',
    'Email': '',
    'Address': ''
  };

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private editModal: EditModalService) { }
  
  ngOnInit() {
    this.fetchUserInfo();
    this.mapUserData();
    this.fetchUserId();
    this.subscribeToEditMode();
  }

  private subscribeToEditMode(): void {
    this.editModeSubscription = this.editModal.onEditChange.subscribe(
      (editMode: boolean) => {
        this.editMode = editMode;
      }
    );
  }

  private fetchUserInfo(): void {
    this.id = this.route.snapshot.children[0].params.id;
    this.user = this.authService.getUserById(this.id);
  }

  private mapUserData(): void {
    this.userViewTemplate['First Name'] = this.user.user.firstName;
    this.userViewTemplate['Last Name'] = this.user.user.lastName;
    this.userViewTemplate['Login'] = this.user.user.login;
    this.userViewTemplate['Phone'] = this.user.user.phone;
    this.userViewTemplate['Email'] = this.user.user.email;
    this.userViewTemplate['Address'] = this.user.user.address;
  }

  private fetchUserId(): void {
    this.userIdSubscription = this.route.firstChild.params
      .subscribe(
        (params: Params) => {
          this.id = params.id;
        }
      );
  }

  editProfile() {
    console.log('Edit Profile ' + this.id);
    this.editModal.toggleEditMode();
  }

  ngOnDestroy() {
    this.userIdSubscription.unsubscribe();
    this.editModeSubscription.unsubscribe();
  }

}

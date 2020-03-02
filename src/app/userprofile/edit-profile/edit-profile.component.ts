import { Component, OnInit } from '@angular/core';
import { EditModalService } from 'src/app/shared/services/edit-modal.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(private editProfile: EditModalService) { }

  ngOnInit(): void {}
  
  public closeModal(): void {
    this.editProfile.toggleEditMode();
  }

}

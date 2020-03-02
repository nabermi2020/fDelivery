import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class EditModalService {
  private editMode: boolean = false;
  public onEditChange = new Subject();

  constructor() {
    this.onEditChange.next(this.editMode);
  }

  public toggleEditMode(): void {
    this.editMode = !this.editMode;
    this.onEditChange.next(this.editMode);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent {
  profilePicture: string | ArrayBuffer = 'default-profile-picture.jpg'; // Default profile picture
  tempSelectedImage: any;
  

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profilePicture = e.target.result;
      };
  
      reader.readAsDataURL(event.target.files[0]);
    } 
  }
}


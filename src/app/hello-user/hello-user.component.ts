import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-user',
  templateUrl: './hello-user.component.html',
  styleUrl: './hello-user.component.css'
})
export class HelloUserComponent {
  userName: string = '';
  selectedFont: string = 'Arial';
  fontSize: number  = 16;
  alignment: string[] = [];

  updateAlignment(alignment: string): void {
    const index = this.alignment.indexOf(alignment);

    if (index === -1) {
      this.alignment.push(alignment);
    } else {
      this.alignment.splice(index, 1);
    }
  }


  getFormattedText(): string {
    const formattedText = `Hello ${this.userName.toUpperCase()}!`;
    return formattedText;
  }

}

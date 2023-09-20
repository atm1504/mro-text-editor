import { Component } from '@angular/core'; // Import the Component decorator

// Decorate the AppComponent class with metadata
@Component({
  selector: 'app-root', // Define the selector for this component
  templateUrl: './app.component.html', // Specify the HTML template file
  styleUrls: ['./app.component.css'] // Specify the CSS style file
})
export class AppComponent {
  dropdownOptions: string[] = ['Choose an option','firstName', 'lastName', 'city', 'email','phone']; // Define an array of dropdown options
  textAreaContent: string = ''; // Define a property to bind to the textarea

  // Function to handle the dropdown selection change
  insertPlaceholderAtCursor(event: Event): void {
    const selectedOption = (event.target as HTMLSelectElement).value; // Get the selected option value
    const textarea: HTMLTextAreaElement | null = document.querySelector('textarea'); // Get the textarea element

    // Check if the textarea element is found to prevent possible null value errors
    if (textarea) {
      const start = textarea.selectionStart; // Get the cursor start position
      const end = textarea.selectionEnd; // Get the cursor end position

      // Construct the new value with the selected option enclosed in double curly braces
      this.textAreaContent = this.textAreaContent.substring(0, start) + `{{${selectedOption}}}` + this.textAreaContent.substring(end);

      // Set the cursor position after the inserted placeholder
      setTimeout(() => { 
        if (textarea) {
          textarea.selectionStart = textarea.selectionEnd = start + selectedOption.length + 4; 
        }
      }, 0);
    }
  }

  // Function to handle the save button click
  saveContent(): void {
    console.log(this.textAreaContent); // Log the content of the textarea to the console
  }
} // Export the AppComponent class

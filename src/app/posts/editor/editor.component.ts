import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  post: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.post = this.fb.group({
      title: this.fb.control('', {
        validators: [ Validators.required]
      }),
      body: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(10)]
      }),
      tags: this.fb.array([
        this.fb.control('Angular'),
        this.fb.control('HTML'),
        this.fb.control('CSS'),
      ])
    });
  }

  get tags(): FormArray {
    return this.post.get('tags') as FormArray;
  }
  // post = new FormGroup({
  //   title: new FormControl('default title' , Validators.required),
  //   body: new FormControl(null, [
  //     Validators.required,
  //     Validators.minLength(10)
  //   ]),
  //   tags: new FormArray([
  //     new FormControl('Angular'),
  //     new FormControl('HTML'),
  //     new FormControl('CSS')
  //   ])
  // });



  addTag(tag){
    if (tag){
      this.tags.push(new FormControl(tag));
    }
  }

  removeTag(index: number){
    this.tags.removeAt(index);
  }

  createPost(){
    console.log(this.post.value);
    this.http.post('http://localhost:3000/api/articles', {
      article: this.post.value
    }).subscribe(() => {
      alert('susscess create article!');
    }, (error) => {
      alert(JSON.stringify(error));
    });
  }
  get title(): AbstractControl{
    return this.post.get('title');
  }

  get body(): AbstractControl{
    return this.post.get('title');
  }
}

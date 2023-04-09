import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductForm!: FormGroup;
  condition: string="";
  closeModal: string="";
  addProductLoading : boolean =false;
  UserId: any = "";
  IsCurrentUser: boolean = false;
  //text editor
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '11rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      [
        'strikeThrough',
        'subscript',
        'superscript',
        'indent',
        'outdent',
        'heading',
        'fontName',
        'insertVideo',
        'link',
        'toggleEditorMode',
        'insertHorizontalRule',
        'insertImage',
        'unlink',
        'customClasses',
        'backgroundColor',
        'textColor',
        'removeFormat',
        'undo',
        'redo',
         
    ]
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  
  };
  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder,private accountService: AccountService,private router: Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.UserId = routeParams.get('UserId'); if(this.UserId == "" || this.UserId == null ){ 
      this.UserId = this.accountService.getUserId();
      this.IsCurrentUser = true;
    }
    this.addProductModal();
  }

  addProductModal () {
    this.addProductForm = this.formBuilder.group({  
      title:	 [], 
    }); 
  }
  onSubmitAddProduct(){

  }
}

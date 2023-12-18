import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  commentValue: string = '';
  memberName = "Renzo";

  constructor(private postService: PostService, private router: Router) {
  }
  @Input() index: number = 0;
  @Input() post?: Post;
  comments: string[] = [];

  ngOnInit(): void {
    console.log(this.post);
    this.comments = this.postService.getComments(this.index);
  }
  delete() {
    this.postService.deleteButton(this.index);
  }
  
  onEdit() {
    this.router.navigate(['/post-edit', this.index])
  }
  onLike() {
    this.postService.likePost(this.index)
  }
 
  onAddComment(commentInput: HTMLInputElement) {
    this.postService.addComment(this.index, commentInput.value);
    this.comments = this.postService.getComments(this.index); // Refresh the comments
    commentInput.value = ''; // Clear the input field
}
  
  editComment(commentIndex: number, newComment: string) {
    this.postService.editComment(this.index, commentIndex, newComment);
    this.comments = this.postService.getComments(this.index); // Refresh the comments
  }
  
  deleteComment(commentIndex: number) {
    this.postService.deleteComment(this.index, commentIndex);
    this.comments = this.postService.getComments(this.index); // Refresh the comments
  }
  startEditingComment(commentIndex: number) {
    this.editingCommentIndex = commentIndex;
  }
  editingCommentIndex: number | null = null;
  saveEditedComment(commentIndex: number, newComment: string) {
    this.editComment(commentIndex, newComment);
    this.editingCommentIndex = null;
  }
  onDislike() {
    this.postService.dislikePost(this.index);
  }
}
import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {

  renderDish(dish) {
    if (dish != null) {
      return(
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name}/>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      )
    }
    else {
      return(
        <div></div>
      )
    }
  }

  renderComments(comments) {
    if (comments != null) {
      const commentList = comments.map((comment) => {
        return (
          <li key={comment.id} className="mb-4">
            <div className="mb-2">{comment.comment}</div>
            <div>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
          </li>
        )
      });

      return (
        <ul className="list-unstyled">
          <h4>Comments</h4>
          {commentList}
        </ul>
      )
    }
    else {
      return (
        <div></div>
      )
    }

  }

  render() {
    let selectedDish = this.props.dish;
    if (selectedDish != null) {
      return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(selectedDish.comments)}
                </div>
            </div>
        </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }

}

export default DishDetail;
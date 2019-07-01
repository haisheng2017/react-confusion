import React,{Component} from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    renderDish(dish) {
        if (dish != null){
            return(
                <div className="col-12 col-sm-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if (comments != null){
            const comment=comments.comments.map((com,index)=>{
                return(
                    <ul key={com.id} className="list-unstyled">
                        <li>
                            {com.comment}
                        </li>
                        <li>
                            --&nbsp;{com.author},{com.date}
                        </li>
                    </ul>
                   
                )
            });
            return(
                <div className="col-12 col-sm-5 m-1">
                   <h4>Comments</h4>
                   {comment}
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){
        return (
            <div className="row">
                {this.renderDish(this.props.dishDetail)}
                {this.renderComments(this.props.dishDetail)}
            </div>
        );
    }
}

export default DishDetail;
import React, { Component } from 'react';
import { Text, FlatList, RefreshControl, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import ToolBar from '../../components/ToolBar';
import { Container } from 'native-base';
import ItemType from '../../components/ItemType';
import { getPosts, savePosts } from '../../redux/actions/postsActions';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isFetching: false,
         }
    }

    componentDidMount(){
        if(!this.props.posts){
            this.props.getPosts({
                callBack: this.onPostResponse
            });
        } 
    }

    onPostResponse = () =>{
        console.log("On Response")
        this.setState({refresh: false});
    }

    onRefresh() {
        this.setState({refresh: true});
        this.props.getPosts({
            callBack: this.onPostResponse
        });
      }

    render() {
        var savedPosts = [];
        if(this.props.posts){
            savedPosts = Object.values(this.props.posts)
        }
        return (
            <Container>
                <ToolBar title="RNTestX"/>
                <ScrollView
                    refreshControl={
                            <RefreshControl
                            refreshing={this.state.refresh}
                            onRefresh={() => this.onRefresh()}
                            tintColor="red"
                            />
                        }>
                    <FlatList
                    data={savedPosts}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => { return(
                        <ItemType item={item}/>
                    )}}/>
                    </ScrollView>
            </Container>
          );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.postsReducer.posts,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getPosts: payload => dispatch(getPosts(payload)),
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);

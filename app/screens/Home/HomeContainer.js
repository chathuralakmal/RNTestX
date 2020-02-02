import React, { Component } from 'react';
import { Text, FlatList, RefreshControl, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import ToolBar from '../../components/ToolBar';
import { Container } from 'native-base';
import ItemType from '../../components/ItemType';
import { getPosts, savePosts } from '../../redux/actions/postsActions';
import NavigationService from "../../navigation/NavigationService";

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isFetching: false,
         }
    }

    componentDidMount(){
        console.log(this.props.posts)
        const posts = Object.values(this.props.posts)
        if(posts.length == 0){
            this.props.getPosts({
                callBack: this.onPostResponse
            });
        } 
    }

    onPostResponse = response =>{
        console.log("On Response")
        this.setState({refresh: false});
    }

    onRefresh() {
        this.setState({refresh: true});
        this.props.getPosts({
            callBack: this.onPostResponse
        });
      }

    navigate = (item) => {
        console.log("Selected ",item.title)
        NavigationService.navigate("DetailScreen", {
            selectedItem: item
        });
    };

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
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({ item }) => { return(
                        <ItemType item={item} onPress={()=> this.navigate(item)}/>
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

import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Gap } from '../../../components';
import { Colors, GlobalStyle } from '../../../styles';
import SearchControl from './common/searchControl';
import SearchHistory from './common/searchHistory';
import SearchSuggestions from './common/searchSuggestions';

interface SearchState {
    search: string
}

interface SearchProps {
    navigation: any
}

class Search extends Component<SearchProps, SearchState> {
    constructor(props: SearchProps){
        super(props);
        this.state = {
            search: ''
        }
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <SearchControl 
                        value={this.state.search} 
                        onBack={() => this.props.navigation.goBack()} 
                        onReset={() => this.setState({ search: '' })}
                        onChangetext={(e: string) => this.setState({ search: e })}
                    />
                    <Gap height={8} width={'100%'} style={{backgroundColor: Colors.form}} />
                    <SearchHistory 
                        histories={['Pancakes', 'Salad']}
                        onChoose={(e: string) => this.setState({ search: e })}
                    />
                    <Gap height={8} width={'100%'} style={{backgroundColor: Colors.form}} />
                    <SearchSuggestions 
                        suggestions={['sushi', 'sandwich', 'seafood', 'fried rice']} 
                        onChoose={(e: any) => this.setState({ search: e })}
                    />
                </View>
            </ScrollView>
        );
    }
}

export default Search;

const styles = StyleSheet.create({
    container: {
        minHeight: GlobalStyle.fullHeight - GlobalStyle.statusBarHeight,
        backgroundColor: Colors.white
    }
});
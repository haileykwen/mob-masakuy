import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Gap } from '../../../components';
import { Colors, GlobalStyle } from '../../../styles';
import SearchControl from './common/searchControl';
import SearchFilter from './common/searchFilter';
import SearchHistory from './common/searchHistory';
import SearchSuggestions from './common/searchSuggestions';

interface SearchState {
    search: string,
    selectedCategory: string,
    duration: string,
    filter: boolean
}

interface SearchProps {
    navigation: any
}

class Search extends Component<SearchProps, SearchState> {
    constructor(props: SearchProps) {
        super(props);
        this.state = {
            search: '',
            selectedCategory: 'all',
            duration: '<10',
            filter: false
        }
    }

    onChangeDuration(e: number){
        if (e < 10) {
            this.setState({ duration: '<10'} );
        } else if (e === 61) {
            this.setState({ duration: '>60' });
        } else {
            this.setState({ duration: `${Math.floor(e)}` });
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
                        onPressFilter={() => this.setState({ filter: true })}
                    />
                    <Gap height={8} width={'100%'} style={{ backgroundColor: Colors.form }} />
                    <SearchHistory
                        histories={['Pancakes', 'Salad']}
                        onChoose={(e: string) => this.setState({ search: e })}
                    />
                    <Gap height={8} width={'100%'} style={{ backgroundColor: Colors.form }} />
                    <SearchSuggestions
                        suggestions={['sushi', 'sandwich', 'seafood', 'fried rice']}
                        onChoose={(e: any) => this.setState({ search: e })}
                    />
                    {this.state.filter && <View style={styles.overlay} />}
                </View>
                
                <SearchFilter
                    visible={this.state.filter}
                    selectedCategory={this.state.selectedCategory}
                    onChangeSelectedCategory={(e: string) => this.setState({ selectedCategory: e })}
                    duration={this.state.duration}
                    onChangeDuration={(e: number) => this.onChangeDuration(e)}
                    closeModal={() => this.setState({ filter: false })}
                />
            </ScrollView>
        );
    }
}

export default Search;

const styles = StyleSheet.create({
    container: {
        minHeight: GlobalStyle.fullHeight - GlobalStyle.statusBarHeight,
        backgroundColor: Colors.white
    },
    overlay: {
        backgroundColor: 'black', 
        opacity: 0.5, 
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
});
import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { IcImagePicker } from '../../../assets/images';
import { Button, Gap, Heading, Input, Paragraph, SliderTimer } from '../../../components';
import { Lang } from '../../../configs';
import { Colors, GlobalStyle } from '../../../styles';

interface CreateState {
    duration: string
}

interface CreateProps {}

class Create extends Component<CreateProps, CreateState> {
    constructor(props: CreateProps){
        super(props);
        this.state = {
            duration: '<10'
        }
    }

    onChangeDuration(e: any){
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
                    <View style={styles.wrapper}>
                        <TouchableOpacity>
                            <Heading type='secondary' style={{color: Colors.secondary}} text={Lang.EN.cancel} />
                        </TouchableOpacity>

                        <Gap height={32} />
                        <View>
                            <View style={styles.imagePicker}>
                                <TouchableOpacity>
                                    <Image source={IcImagePicker} style={styles.imagePickerIcon} />
                                </TouchableOpacity>
                                <Gap height={GlobalStyle.paddingTertiary} />
                                <TouchableOpacity>
                                    <Heading type='tertiary' text={Lang.EN.addCoverPhoto} />
                                </TouchableOpacity>
                                <Gap height={8} />
                                <Paragraph type='tertiary' text={`(${Lang.EN.upTo12Mb})`} />
                            </View>
                        </View>

                        <Gap height={GlobalStyle.paddingPrimary} />
                        <Heading type='secondary' text={Lang.EN.foodName} />
                        <Gap height={10} />
                        <Input placeholder={Lang.EN.enterFoodName} />

                        <Gap height={GlobalStyle.paddingPrimary} />
                        <Heading type='secondary' text={Lang.EN.description} />
                        <Gap height={10} />
                        <Input placeholder={Lang.EN.enterFoodName} multiline={true} />

                        <Gap height={GlobalStyle.paddingPrimary} />
                        <SliderTimer
                            onChangeDuration={(e: any) => this.onChangeDuration(e)}
                            duration={this.state.duration}
                            label={Lang.EN.cookingDuration}
                        />
                    </View>

                    <Gap height={8} width={'100%'} style={{backgroundColor: Colors.form}} />

                    <View style={styles.wrapper}>
                        <Heading type='secondary' text={Lang.EN.ingredients} />

                        <Gap height={GlobalStyle.paddingPrimary} />
                        <Input type='ingredients' placeholder={Lang.EN.enterIngredient} />

                        <Gap height={32} />
                        <Button type='ingredients' text={Lang.EN.ingredients} />
                    </View>

                    <Gap height={8} width={'100%'} style={{backgroundColor: Colors.form}} />

                    <View style={styles.wrapper}>
                        <Heading type='secondary' text={Lang.EN.steps} />

                        <Gap height={GlobalStyle.paddingPrimary} />
                        <Input type='steps' index={`${1}`} placeholder={Lang.EN.describeStep} multiline={true} />

                        <Gap height={32} />
                        <Button type='ingredients' text={Lang.EN.steps} />
                    </View>

                    <Gap height={8} width={'100%'} style={{backgroundColor: Colors.form}} />

                    <View style={styles.wrapper}>
                        <Button text={Lang.EN.create} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Create;

const styles = StyleSheet.create({
    container: {
        minHeight: GlobalStyle.fullHeight - GlobalStyle.statusBarHeight,
        backgroundColor: Colors.white,
    },
    wrapper: {
        padding: GlobalStyle.paddingPrimary
    },
    imagePicker: {
        height: 161,
        borderRadius: 16,
        borderColor: Colors.outline,
        borderStyle: 'dashed',
        borderWidth: 1,
        padding: GlobalStyle.paddingTertiary,
        alignItems: 'center'
    },
    imagePickerIcon: {
        width: 64,
        height: 64
    }
});
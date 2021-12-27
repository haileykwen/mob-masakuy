import Slider from '@react-native-community/slider';
import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { Button, ButtonSelect, Gap, Heading } from '../../../../components';
import { Lang } from '../../../../configs';
import { Colors, GlobalStyle } from '../../../../styles';

interface SearchFilterProps {
    visible: boolean,
    selectedCategory: string,
    onChangeSelectedCategory: any,
    duration: string,
    onChangeDuration: any,
    closeModal: any
}

const SearchFilter = (props: SearchFilterProps) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Heading text={Lang.EN.addFilter} style={styles.headingFilter} />

                    <Heading type='secondary' text={Lang.EN.category} />
                    <Gap height={GlobalStyle.paddingTertiary} />
                    <View style={styles.buttonSelectWrapper}>
                        <ButtonSelect 
                            text={Lang.EN.all} 
                            active={props.selectedCategory === 'all' ? true : false} 
                            onPress={() => props.onChangeSelectedCategory('all')}
                        />
                        <Gap width={GlobalStyle.paddingTertiary} />
                        <ButtonSelect 
                            text={Lang.EN.food} 
                            active={props.selectedCategory === 'food' ? true : false}
                            onPress={() => props.onChangeSelectedCategory('food')} 
                        />
                        <Gap width={GlobalStyle.paddingTertiary} />
                        <ButtonSelect 
                            text={Lang.EN.drink} 
                            active={props.selectedCategory === 'drink' ? true : false} 
                            onPress={() => props.onChangeSelectedCategory('drink')}
                        />
                    </View>

                    <View style={styles.headingCookingDurationWrapper}>
                        <Heading type='secondary' text={Lang.EN.cookingDuration} />
                        <Heading type='secondary' text={`(${Lang.EN.inMinutes})`} style={styles.headingCookingDurationInMinutes} />
                    </View>
                    <View style={styles.durationWrapper}>
                        <Heading text='<10' style={{color: Colors.textSecondary}} />
                        <Heading text={props.duration} style={{color: Colors.primary}} />
                        <Heading text='>60' style={{color: Colors.textSecondary}} />
                    </View>
                    <Slider
                        style={{width: '100%'}}
                        minimumValue={9}
                        maximumValue={61}
                        thumbTintColor={Colors.primary}
                        minimumTrackTintColor={Colors.primary}
                        onValueChange={(e) => props.onChangeDuration(e)}
                    />

                    <View style={styles.buttonWrapper}>
                        <View style={styles.button}>
                            <Button text={Lang.EN.cancel} type='outline' onPress={props.closeModal} />
                        </View>
                        <Gap width={15} />
                        <View style={styles.button}>
                            <Button text={Lang.EN.done} />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default SearchFilter;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        width: GlobalStyle.fullWidth,
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        height: 460,
        width: GlobalStyle.fullWidth,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        position: 'absolute',
        bottom: 0,
        backgroundColor: Colors.white,
        paddingVertical: 32,
        paddingHorizontal: GlobalStyle.paddingPrimary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    headingFilter: {
        textAlign: 'center',
        marginBottom: 32
    },
    buttonSelectWrapper: {
        flexDirection: 'row',
        marginBottom: 32
    },
    headingCookingDurationWrapper: {
        flexDirection: 'row',
        marginBottom: 16
    },
    headingCookingDurationInMinutes: {
        color: Colors.textSecondary,
        fontWeight: '300',
        marginLeft: 5
    },
    durationWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    buttonWrapper: {
        flexDirection: 'row',
        marginBottom: 0,
        marginTop: 'auto'
    },
    button: {
        width: (GlobalStyle.fullWidth / 2) - 31.5
    }
});
import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { Button, ButtonSelect, Gap, Heading } from '../../../../components';
import SliderTimer from '../../../../components/slider';
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

                    <SliderTimer
                        onChangeDuration={(e: any) => props.onChangeDuration(e)}
                        duration={props.duration}
                        label={Lang.EN.cookingDuration}
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
    // headingCookingDurationWrapper: {
    //     flexDirection: 'row',
    //     marginBottom: 16
    // },
    // headingCookingDurationInMinutes: {
    //     color: Colors.textSecondary,
    //     fontWeight: '300',
    //     marginLeft: 5
    // },
    // durationWrapper: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginBottom: 8
    // },
    buttonWrapper: {
        flexDirection: 'row',
        marginBottom: 0,
        marginTop: 'auto'
    },
    button: {
        width: (GlobalStyle.fullWidth / 2) - 31.5
    }
});
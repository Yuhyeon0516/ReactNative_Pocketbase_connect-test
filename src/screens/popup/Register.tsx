import {SafeAreaView, KeyboardAvoidingView, ScrollView} from "react-native";
import React, {useState} from "react";
import Header from "../../components/popup/Header";
import Spacer from "../../components/common/Spacer";
import PinkButton from "../../components/common/PinkButton";
import RegisterInput from "../../components/register/RegisterInput";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StackParams} from "../../types/type";
import {handleRegister, onPressNicknameDoubleCheck} from "../../utils/pb";

export default function Register() {
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const navigation = useNavigation<NavigationProp<StackParams>>();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "whitesmoke"}}>
            <ScrollView
                style={{flexGrow: 0}}
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={false}>
                <Header title="회원가입" />
                <RegisterInput
                    secure={false}
                    title="이메일"
                    value={email}
                    onChangeText={setEmail}
                />

                <Spacer height={20} />

                <RegisterInput
                    secure={false}
                    title="닉네임"
                    value={nickname}
                    onChangeText={setNickname}
                    showButton
                    onPressButton={() => onPressNicknameDoubleCheck(nickname)}
                />

                <Spacer height={20} />

                <RegisterInput
                    title="비밀번호"
                    value={password}
                    onChangeText={setPassword}
                />

                <Spacer height={20} />

                <RegisterInput
                    title="비밀번호 확인"
                    value={passwordConfirm}
                    onChangeText={setPasswordConfirm}
                />
            </ScrollView>
            <Spacer height={20} />
            <KeyboardAvoidingView style={{paddingHorizontal: 20}}>
                <PinkButton
                    text="회원가입"
                    onPress={() => {
                        handleRegister(
                            email,
                            nickname,
                            password,
                            passwordConfirm,
                            navigation,
                        );
                    }}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

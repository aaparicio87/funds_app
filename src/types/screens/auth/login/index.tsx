import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../navigation/auth";


export type loginScreenProps = NativeStackScreenProps<AuthStackParamList, "Login">
export type registerScreenProps = NativeStackScreenProps<AuthStackParamList, "Register">
export type registerFinishedProps = NativeStackScreenProps<AuthStackParamList, 'RegisterFinished'>
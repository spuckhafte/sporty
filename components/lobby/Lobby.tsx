import { ScrollView, StyleSheet } from "react-native";
import Card from "./Card";
import gymDetails from '../../assets/fake/fake_gym.json';

export default function Lobby() {
    return <ScrollView contentContainerStyle={styles.cardStack}>
        { Object.values(gymDetails).map((oneGym, i) => <Card gym={oneGym} key={i} />) }
    </ScrollView>
}

const styles = StyleSheet.create({
    cardStack: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: 2
    }
});
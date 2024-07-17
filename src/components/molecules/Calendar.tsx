import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import dayjs from 'dayjs';
import { useTheme } from 'react-native-paper';

const availableDays = ['2024-07-21', '2024-07-23', '2024-07-24', '2024-07-30'];

interface MarkedDates {
  [date: string]: {
    selected?: boolean;
    selectedColor?: string;
    marked?: boolean;
    dotColor?: string;
    disabled?: boolean;
  };
}

const CalendarComponent: React.FC = () => {
  const theme = useTheme();
  const today = dayjs().format('YYYY-MM-DD');
  const [markedDates, setMarkedDates] = useState<MarkedDates>({
    [today]: { selected: false, disabled: true },
  });

  const handleDayPress = (day: any) => {
    const selectedDay = day.dateString;
    if (!markedDates[selectedDay]?.marked || markedDates[selectedDay]?.disabled)
      return;
    const updatedMarkedDates: MarkedDates = Object.keys(markedDates).reduce(
      (acc, date) => ({
        ...acc,
        [date]: {
          ...markedDates[date],
          selected: false,
          selectedColor: undefined,
        },
      }),
      {} as MarkedDates
    );
    updatedMarkedDates[selectedDay] = {
      ...updatedMarkedDates[selectedDay],
      selected: true,
      selectedColor: theme.colors.primary,
    };
    setMarkedDates(updatedMarkedDates);
  };

  useEffect(() => {
    const updatedMarkedDates: MarkedDates = availableDays.reduce(
      (acc, day) => ({
        ...acc,
        [day]: { selected: false, marked: true, dotColor: 'red' },
      }),
      { ...markedDates } as MarkedDates
    );
    setMarkedDates(updatedMarkedDates);
  }, []);

  return (
    <View style={styles.container}>
      <Calendar
        current={today}
        minDate={today}
        onDayPress={handleDayPress}
        markedDates={markedDates}
        theme={{
          selectedDayBackgroundColor: theme.colors.primary,
          todayTextColor: theme.colors.primary,
          arrowColor: theme.colors.primary,
        }}
        disableAllTouchEventsForDisabledDays
      />
      <Text style={styles.legendText}>
        Datas disponíveis pontuadas em vermelho
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  legendText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  },
});

export default CalendarComponent;

const adviceData = {
    conditions:[
        {
            condition: 'Sunny',
            advice: 'Sunny weather will not cause you any inconvenience while driving.'
        },
        {
            condition: 'Cloudy',
            advice: 'Cloudy weather will not cause you any inconvenience while driving, but the mood can be sad.'
        },
        {
            condition: 'Partly cloudy',
            advice: 'Partly cloudy weather will not cause you any inconvenience while driving. '
        },
        {
            condition: 'Clear',
            advice: 'The weather is clear, but be careful in the dark.'
        },
        {
            condition: 'Overcast',
            advice: 'Overcast weather will not cause you any inconvenience while driving.'
        },
        {
            condition: 'Mist',
            advice: 'It`s misty today. It is not recommended to drive or use fog lights.'
        },
        {
            condition: 'Patchy rain possible',
            advice: 'Adapt your driving to the fluctuating road conditions, remember to cover your car.'
        },
        {
            condition: 'Patchy snow possible',
            advice: 'Adapt your driving to the fluctuating road conditions.'
        },
        {
            condition: 'Patchy sleet possible',
            advice: 'Adapt your driving to the fluctuating road conditions.'
        },
        {
            condition: 'Patchy freezing drizzle possible',
            advice: 'Adapt your driving to the fluctuating road conditions.'
        },
        {
            condition: 'Thundery outbreaks possible',
            advice: 'Steer clear of tall objects, such as trees or poles, that may attract lightning strikes.'
        },
        {
            condition: 'Blowing snow',
            advice: 'Turn on your headlights to increase your visibility to other drivers and use fog lights if your vehicle is equipped with them.'
        },
        {
            condition: 'Blizzard',
            advice: 'Blizzard outside, visibility obscured.'
        },
        {
            condition: 'Fog',
            advice: 'Turn on your headlights to increase your visibility to other drivers and use fog lights if your vehicle is equipped with them.'
        },
        {
            condition: 'Freezing fog',
            advice: 'Increase the distance between your vehicle and the one ahead to allow for longer braking distances and to have more time to react to unexpected situations.'
        },
        {
            condition: 'Patchy light drizzle',
            advice: 'Adapt your driving to the fluctuating road conditions.'
        },
        {
            condition: 'Light drizzle',
            advice: 'Watch out for pedestrians and cyclists who may be less visible in the rain, and give them extra space when passing.'
        },
        {
            condition: 'Freezing drizzle',
            advice: 'Reduce your speed and drive at a slower pace to maintain better control over your vehicle on potentially icy surfaces created by the freezing drizzle.'
        },
        {
            condition: 'Heavy freezing drizzle',
            advice: 'Keep your windshield and windows clear by using the defrost and wiper functions effectively.'
        },
        {
            condition: 'Patchy light rain',
            advice: 'Stay focused and attentive, as even light rain can cause distractions and require quick reactions to potential hazards.'
        },
        {
            condition: 'Light rain',
            advice: 'Stay focused and attentive, as even light rain can cause distractions and require quick reactions to potential hazards.'
        },
        {
            condition: 'Moderate rain at times',
            advice: 'Stay focused and attentive, as even light rain can cause distractions and require quick reactions to potential hazards.'
        },
        {
            condition: 'Moderate rain',
            advice: 'Reduce your speed and drive at a safe and controlled pace, allowing for increased stopping distances on wet roads.'
        },
        {
            condition: 'Heavy rain at times',
            advice: 'Reduce your speed and drive at a safe and controlled pace, allowing for increased stopping distances on wet roads.'
        },
        {
            condition: 'Heavy rain',
            advice: 'Watch out for standing water and avoid driving through flooded areas, as it can be difficult to gauge the depth and it may lead to loss of control or damage to your vehicle.'
        },
        {
            condition: 'Light freezing rain',
            advice: 'Stay focused and attentive, as even light rain can cause distractions and require quick reactions to potential hazards.'
        },
        {
            condition: 'Moderate or heavy freezing rain',
            advice: 'Avoid sudden braking or accelerating, as these actions can cause your vehicle to skid on icy surfaces.'
        },
        {
            condition: 'Light sleet',
            advice: 'Be cautious of icy patches that may form on the road, especially on bridges, overpasses, and shaded areas.'
        },
        {
            condition: 'Moderate or heavy sleet',
            advice: 'Be cautious of icy patches that may form on the road, especially on bridges, overpasses, and shaded areas.'
        },
        {
            condition: 'Patchy light snow',
            advice: 'Be cautious of icy patches that may form on the road, especially on bridges, overpasses, and shaded areas.'
        },
        {
            condition: 'Light snow',
            advice: 'Be cautious of slippery road conditions and adjust your driving accordingly by braking gently and avoiding sudden maneuvers.'
        },
        {
            condition: 'Moderate snow',
            advice: 'Be cautious of slippery road conditions and adjust your driving accordingly by braking gently and avoiding sudden maneuvers.'
        },
        {
            condition: 'Patchy heavy snow',
            advice: 'Turn on your headlights to improve visibility and ensure that other drivers can see you.'
        },
        {
            condition: 'Heavy snow',
            advice: 'Turn on your headlights to improve visibility and ensure that other drivers can see you.'
        },
        {
            condition: 'Ice pellets',
            advice: 'Avoid sudden braking or accelerating, as these actions can cause your vehicle to lose traction on icy surfaces.'
        },
        {
            condition: 'Light rain shower',
            advice: 'Keep a reasonable speed and be aware that road surfaces may be slightly slippery due to the rain.'
        },
        {
            condition: 'Moderate or heavy rain shower',
            advice: 'Keep a reasonable speed and be aware that road surfaces may be slightly slippery due to the rain.'
        },
        {
            condition: 'Torrential rain shower',
            advice: 'Make sure your windshield wiper blades are in good condition before the rain shower starts to ensure optimal performance.'
        },
        {
            condition: 'Light sleet showers',
            advice: 'Be cautious of oil slicks or accumulated debris on the road, as they can become more slippery when wet.'
        },
        {
            condition: 'Moderate or heavy sleet showers',
            advice: 'Keep an eye out for pedestrians with umbrellas or individuals on bicycles, as they may have reduced visibility or stability in the rain.'
        },
        {
            condition: 'Light snow showersLight snow showers',
            advice: 'Keep an eye out for pedestrians with umbrellas or individuals on bicycles, as they may have reduced visibility or stability in the rain.'
        },
        {
            condition: 'Moderate or heavy snow showers',
            advice: 'Use gentle and gradual movements when accelerating, braking, and steering. Avoid sudden maneuvers that could cause your vehicle to lose traction.'
        },
        {
            condition: 'Light showers of ice pellets',
            advice: 'Be cautious of icy patches that may form on the road, especially on bridges, overpasses, and shaded areas.'
        },
        {
            condition: 'Moderate or heavy showers of ice pellets',
            advice: 'Avoid using cruise control, as it can reduce your control over the vehicle in slippery conditions.'
        },
        {
            condition: 'Patchy light rain with thunder',
            advice: 'Use the middle lanes of the road when possible, as water tends to accumulate more in the outer lanes.'
        },
        {
            condition: 'Moderate or heavy rain with thunder',
            advice: 'Watch for potential hazards such as fallen branches or debris on the road, as rain showers can cause these objects to be more prevalent.'
        },
        {
            condition: 'Patchy light snow with thunder',
            advice: 'Use gentle and gradual movements when accelerating, braking, and steering. Avoid sudden maneuvers that could cause your vehicle to lose traction.'
        },
        {
            condition: 'Moderate or heavy snow with thunder',
            advice: 'Ensure your vehicle is properly prepared for winter conditions. This includes having appropriate tires for icy and slippery surfaces, checking your tire pressure, and ensuring all vehicle systems are in good working condition.'
        },
    ]
}
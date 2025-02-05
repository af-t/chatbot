const emojiData = [
  ['😔', ['pensive', 'pensive_face', 'sigh']],
  ['😉', ['wink']],
  ['🗿', ['moai', 'moyai']],
  ['😳', ['flushed', 'stunned', 'shocked']],
  ['😐', ['neutral', 'meh']],
  ['🤔', ['thinking', 'think', 'hmm']],
  ['😊', ['smiling', 'happy', 'smile']],
  ['😂', ['laughing', 'lol', 'haha']],
  ['🤣', ['rolling_on_the_floor_laughing', 'rofl']],
  ['👍', ['thumbsup', 'ok', 'good']],
  ['👎', ['thumbsdown', 'bad', 'no']],
  ['💯', ['perfect', '100', 'amazing']],
  ['🔥', ['fire', 'hot', 'lit']],
  ['✨', ['sparkles', 'glitter', 'shine']],
  ['💖', ['pink_heart', 'love', 'cute']],
  ['💙', ['blue_heart', 'sad']],
  ['💜', ['purple_heart', 'love']],
  ['💚', ['green_heart', 'nature']],
  ['💛', ['yellow_heart', 'joy']],
  ['❤️', ['red_heart', 'love']],
  ['🖤', ['black_heart', 'death']],
  ['🤍', ['white_heart', 'peace']],
  ['💔', ['broken_heart', 'sad']],
  ['🥰', ['smiling_face_with_hearts', 'love']],
  ['😍', ['smiling_face_with_heart_eyes', 'love']],
  ['😘', ['face_blowing_a_kiss', 'kiss']],
  ['😗', ['kissing_face', 'kiss']],
  ['😙', ['kissing_face_with_smiling_eyes', 'kiss']],
  ['😚', ['kissing_face_with_closed_eyes', 'kiss']],
  ['😋', ['face_savoring_food', 'delicious']],
  ['😛', ['face_with_tongue', 'silly']],
  ['😜', ['winking_face_with_tongue', 'playful']],
  ['😝', ['squinting_face_with_tongue', 'mischievous']],
  ['🤤', ['drooling_face', 'hungry']],
  ['😒', ['unamused_face', 'bored']],
  ['😓', ['worried_face', 'anxious']],
  ['😔', ['pensive_face', 'sad']],
  ['😕', ['confused_face', 'questioning']],
  ['😟', ['worried_face', 'concerned']],
  ['🙁', ['slightly_frowning_face', 'disappointed']],
  ['☹️', ['frowning_face', 'sad']],
  ['😣', ['persevering_face', 'struggling']],
  ['😖', ['confounded_face', 'stressed']],
  ['😫', ['tired_face', 'exhausted']],
  ['😩', ['weary_face', 'tired']],
  ['😤', ['face_with_steam_from_nose', 'angry']],
  ['😠', ['angry_face', 'mad']],
  ['😡', ['pouting_face', 'irritated']],
  ['🤬', ['face_with_symbols_on_mouth', 'cursing']],
  ['🤯', ['exploding_head', 'shocked']],
  ['😳', ['flushed_face', 'embarrassed']],
  ['😱', ['scream', 'scared']],
  ['😨', ['fearful_face', 'afraid']],
  ['😰', ['anxious_face_with_sweat', 'nervous']],
  ['😥', ['sad_but_relieved_face', 'sorry']],
  ['😓', ['face_with_head_bandage', 'injured']],
  ['🤗', ['hugging_face', 'warm']],
  ['🤔', ['thinking_face', 'contemplative']],
  ['🤓', ['nerd_face', 'smart']],
  ['😎', ['smiling_face_with_sunglasses', 'cool']],
  ['🤡', ['clown_face', 'funny']],
  ['🤠', ['cowboy_hat_face', 'country']],
  ['👹', ['ogre', 'monster']],
  ['👺', ['goblin', 'imp']],
  ['👻', ['ghost', 'halloween']],
  ['💀', ['skull', 'death']],
  ['👽', ['alien', 'extraterrestrial']],
  ['🤖', ['robot', 'machine']],
  ['💩', ['pile_of_poo', 'poop']],
  ['💯', ['hundred_points', 'perfect']],
  ['👍', ['thumbs_up', 'positive']],
  ['👎', ['thumbs_down', 'negative']],
  ['👏', ['clapping_hands', 'applause']],
  ['🙌', ['raised_hands', 'celebration']],
  ['🙏', ['folded_hands', 'prayer']],
  ['💪', ['flexed_biceps', 'strong']],
  ['🤞', ['crossed_fingers', 'hope']],
  ['✌️', ['victory_hand', 'peace']],
  ['👌', ['OK_hand', 'perfect']],
  ['👍', ['thumbs_up', 'good']],
  ['👎', ['thumbs_down', 'bad']],
  ['💯', ['100', 'perfect']],
  ['❤️', ['heart', 'love']],
  ['💔', ['broken_heart', 'sad']],
  ['✨', ['sparkles', 'magic']],
  ['🔥', ['fire', 'hot']],
  ['⭐', ['star', 'awesome']],
  ['🎉', ['party_popper', 'celebration']],
  ['🎈', ['balloon', 'party']],
  ['🎁', ['gift', 'present']],
  ['🎂', ['birthday_cake', 'celebration']],
  ['🍻', ['clinking_beer_mugs', 'cheers']],
  ['🥂', ['clinking_glasses', 'toast']],
  ['🍾', ['bottle_with_popping_cork', 'celebration']],
  ['⚽', ['soccer_ball', 'sports']],
  ['🏀', ['basketball', 'sports']],
  ['🏈', ['american_football', 'sports']],
  ['⚾', ['baseball', 'sports']],
  ['🎾', ['tennis', 'sports']],
  ['⛳', ['golf', 'sports']],
  ['🎮', ['video_game', 'gaming']],
  ['🎲', ['game_die', 'games']],
  ['🎯', ['direct_hit', 'target']],
  ['🎧', ['headphones', 'music']],
  ['🎤', ['microphone', 'singing']],
  ['🎬', ['clapper_board', 'film']],
  ['🎨', ['artist_palette', 'art']],
  ['📚', ['books', 'reading']],
  ['✏️', ['pencil', 'writing']],
  ['💻', ['laptop', 'computer']],
  ['📱', ['mobile_phone', 'technology']],
  ['🌐', ['globe_with_meridians', 'world']],
  ['🗺️', ['world_map', 'travel']],
  ['✈️', ['airplane', 'travel']],
  ['🚀', ['rocket', 'space']],
  ['🚗', ['car', 'vehicle']],
  ['🚌', ['bus', 'vehicle']],
  ['🚂', ['train', 'vehicle']],
  ['🚢', ['ship', 'vehicle']],
  ['🚀', ['rocket', 'space']],
  ['🌙', ['crescent_moon', 'night']],
  ['☀️', ['sun', 'day']],
  ['☁️', ['cloud', 'weather']],
  ['☔️', ['umbrella', 'rain']],
  ['❄️', ['snowflake', 'winter']],
  ['🔥', ['fire', 'hot']],
  ['💧', ['drop', 'water']],
  ['💨', ['dash', 'wind']],
  ['💨', ['wind_blowing_face', 'wind']],
  ['💯', ['100', 'perfect']],
  ['✅', ['check_mark', 'correct']],
  ['❌', ['cross_mark', 'incorrect']],
  ['❓', ['question', 'query']],
  ['❗', ['exclamation', 'important']],
  ['⚠️', ['warning', 'alert']],
  ['📌', ['pushpin', 'pin']],
  ['📍', ['round_pushpin', 'location']],
  ['🔗', ['link', 'url']],
  ['➡️', ['right_arrow', 'next']],
  ['⬅️', ['left_arrow', 'back']],
  ['⬆️', ['up_arrow', 'up']],
  ['⬇️', ['down_arrow', 'down']],
  ['🔄', ['arrows_counterclockwise', 'refresh']],
  ['➕', ['plus', 'add']],
  ['➖', ['minus', 'subtract']],
  ['✖️', ['multiply', 'times']],
  ['➗', ['divide', 'fraction']],
  ['💲', ['heavy_dollar_sign', 'money']],
  ['💵', ['dollar_banknote', 'money']],
  ['💰', ['money_bag', 'wealth']],
  ['💳', ['credit_card', 'payment']],
  ['💎', ['gem', 'jewel']],
  ['👑', ['crown', 'royalty']],
  ['💍', ['ring', 'jewelry']],
  ['🎩', ['tophat', 'formal']],
  ['🎓', ['graduation_cap', 'education']],
  ['💼', ['briefcase', 'business']],
  ['📁', ['file_folder', 'files']],
  ['📂', ['open_file_folder', 'files']],
  ['📄', ['page_facing_up', 'document']],
  ['📅', ['calendar', 'date']],
  ['⏰', ['alarm_clock', 'time']],
  ['⏳', ['hourglass', 'time']],
  ['⌚', ['wristwatch', 'time']],
  ['📱', ['iphone', 'phone']],
  ['💻', ['computer', 'laptop']],
  ['🖥️', ['desktop_computer', 'computer']],
  ['🖨️', ['printer', 'printing']],
  ['🖱️', ['computer_mouse', 'mouse']],
  ['⌨️', ['keyboard', 'typing']],
  ['🕹️', ['joystick', 'gaming']],
  ['🎮', ['video_game', 'gaming']],
  ['🎧', ['headphones', 'music']],
  ['🎤', ['microphone', 'singing']],
  ['🎬', ['movie_camera', 'film']],
  ['📸', ['camera', 'photography']],
  ['🖼️', ['framed_picture', 'art']],
  ['🎨', ['art', 'painting']],
  ['📚', ['books', 'reading']],
  ['✏️', ['pencil', 'writing']],
  ['✒️', ['black_nib', 'writing']],
  ['📝', ['memo', 'note']],
  ['📞', ['telephone', 'call']],
  ['📧', ['e-mail', 'message']],
  ['🌐', ['globe_showing_Americas', 'world']],
  ['🗺️', ['world_map', 'travel']],
  ['✈️', ['airplane', 'travel']],
  ['🚀', ['rocket', 'space']],
  ['🚗', ['automobile', 'car']],
  ['🚌', ['bus', 'vehicle']],
  ['🚂', ['train', 'vehicle']],
  ['🚢', ['ship', 'vehicle']],
  ['🚲', ['bicycle', 'bike']],
  ['🚶', ['pedestrian', 'walking']],
  ['🏃', ['runner', 'running']],
  ['🏠', ['house', 'home']],
  ['🏡', ['house_with_garden', 'home']],
  ['🏢', ['office', 'business']],
  ['🏣', ['post_office', 'business']],
  ['🏥', ['hospital', 'healthcare']],
  ['🏦', ['bank', 'finance']],
  ['🏪', ['convenience_store', 'shopping']],
  ['🏫', ['school', 'education']],
  ['🏢', ['office_building', 'business']],
  ['🏭', ['factory', 'industry']],
  ['🏠', ['house_building', 'home']],
  ['🏡', ['house', 'home']],
  ['🌳', ['deciduous_tree', 'nature']],
  ['🌴', ['palm_tree', 'tropical']],
  ['🌵', ['cactus', 'desert']],
  ['🌻', ['sunflower', 'flower']],
  ['🌹', ['rose', 'flower']],
  ['🌷', ['tulip', 'flower']],
  ['🌸', ['cherry_blossom', 'flower']],
  ['🌼', ['blossom', 'flower']],
  ['🌺', ['hibiscus', 'flower']],
  ['🍄', ['mushroom', 'fungus']],
  ['🌿', ['herb', 'plant']],
  ['☘️', ['shamrock', 'clover']],
  ['🍀', ['four_leaf_clover', 'luck']],
  ['🍁', ['maple_leaf', 'autumn']],
  ['🍂', ['fallen_leaf', 'autumn']],
  ['🍃', ['leaf_fluttering_in_wind', 'nature']],
  ['🌾', ['ear_of_rice', 'grain']],
  ['🌻', ['sunflower', 'flower']],
  ['🌞', ['sun_with_face', 'sunny']],
  ['🌝', ['full_moon_with_face', 'moon']],
  ['🌚', ['new_moon_with_face', 'moon']],
  ['⭐', ['star', 'night']],
  ['🌟', ['glowing_star', 'bright']],
  ['💫', ['dizzy', 'sparkle']],
  ['🌈', ['rainbow', 'colorful']],
  ['☁️', ['cloud', 'weather']],
  ['🌧️', ['cloud_with_rain', 'rain']],
  ['⛈️', ['cloud_with_lightning_and_rain', 'storm']],
  ['🌨️', ['cloud_with_snow', 'snow']],
  ['☀️', ['sun', 'day']],
  ['🌙', ['moon', 'night']],
  ['⭐', ['star', 'night']],
  ['🌟', ['glowing_star', 'bright']],
  ['💫', ['dizzy', 'sparkle']],
  ['🌈', ['rainbow', 'colorful']],
  ['☁️', ['cloud', 'weather']],
  ['🌧️', ['cloud_with_rain', 'rain']],
  ['⛈️', ['cloud_with_lightning_and_rain', 'storm']],
  ['🌨️', ['cloud_with_snow', 'snow']],
  ['☀️', ['sun', 'day']],
  ['🌙', ['moon', 'night']]
];

const replace = (text) => text.replace(/\*\w+\*/g, match => {
  const emoji = emojiData.find(emoji => emoji[1].includes(match.slice(1, -1)));
  return emoji ? emoji[0] : match;
});

const add = (emoji, key) => {
  const index = emojiData.findIndex(e => e[0] === emoji);
  if (index !== -1) {
    emojiData[index][1].push(key);
  } else {
    emojiData.push([emoji, [key]]);
  }
};

export default { add, replace };

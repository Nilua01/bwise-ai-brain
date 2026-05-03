// Static meal plan data — 15 days, family of 3 (2 adults + 1 kid)
// No beef or pork. Dinner doubles as next-day lunch.

export type MealDay = {
  id: number;
  day_number: number;
  week_number: number;
  dinner_main: string;
  side: string;
  kid_friendly: boolean;
  prep_notes: string;
  active_time_minutes: number;
};

export type RecipeDetail = {
  id: number;
  meal_day_id: number;
  ingredients: string[];
  instructions: string[];
  lunch_tip: string;
};

export type ShoppingItem = {
  id: number;
  week_number: number;
  category: string;
  item: string;
  quantity: string;
  purchased: boolean;
};

export const mealDays: MealDay[] = [
  { id: 1, day_number: 1, week_number: 1, dinner_main: "Chicken Curry with Roti", side: "Cucumber Raita", kid_friendly: true, prep_notes: "Marinate chicken 30 min ahead", active_time_minutes: 45 },
  { id: 2, day_number: 2, week_number: 1, dinner_main: "Egg Fried Rice", side: "Manchurian Gravy", kid_friendly: true, prep_notes: "Use day-old rice for best texture", active_time_minutes: 30 },
  { id: 3, day_number: 3, week_number: 1, dinner_main: "Prawn Masala", side: "Steamed Rice & Kachumber", kid_friendly: false, prep_notes: "Devein prawns in the morning", active_time_minutes: 40 },
  { id: 4, day_number: 4, week_number: 1, dinner_main: "Paneer Butter Masala", side: "Garlic Naan", kid_friendly: true, prep_notes: "None", active_time_minutes: 35 },
  { id: 5, day_number: 5, week_number: 1, dinner_main: "Mushroom & Pea Pulao", side: "Boiled Egg & Salad", kid_friendly: true, prep_notes: "Soak rice 20 min before cooking", active_time_minutes: 40 },
  { id: 6, day_number: 6, week_number: 1, dinner_main: "Chicken Biryani", side: "Mirchi ka Salan", kid_friendly: true, prep_notes: "Marinate chicken 1 hr; layer rice carefully", active_time_minutes: 75 },
  { id: 7, day_number: 7, week_number: 1, dinner_main: "Baked Veggie Pasta", side: "Garlic Bread", kid_friendly: true, prep_notes: "None", active_time_minutes: 45 },
  { id: 8, day_number: 8, week_number: 2, dinner_main: "Chana Masala with Roti", side: "Pickled Onion & Raita", kid_friendly: true, prep_notes: "Soak chickpeas overnight or use canned", active_time_minutes: 35 },
  { id: 9, day_number: 9, week_number: 2, dinner_main: "Egg Curry", side: "Steamed Rice & Salad", kid_friendly: true, prep_notes: "Boil eggs ahead", active_time_minutes: 30 },
  { id: 10, day_number: 10, week_number: 2, dinner_main: "Garlic Prawn Stir-Fry", side: "Hokkien Noodles", kid_friendly: false, prep_notes: "Peel prawns in the morning", active_time_minutes: 25 },
  { id: 11, day_number: 11, week_number: 2, dinner_main: "Palak Paneer", side: "Jeera Rice", kid_friendly: true, prep_notes: "Blanch spinach before blending", active_time_minutes: 35 },
  { id: 12, day_number: 12, week_number: 2, dinner_main: "Chicken Stir-Fry with Veggies", side: "Hokkien Noodles", kid_friendly: true, prep_notes: "Slice chicken thin for fast cooking", active_time_minutes: 25 },
  { id: 13, day_number: 13, week_number: 2, dinner_main: "Mushroom & Corn Soup", side: "Cheese Toast", kid_friendly: true, prep_notes: "None", active_time_minutes: 30 },
  { id: 14, day_number: 14, week_number: 2, dinner_main: "Beans Poriyal & Sambar", side: "Rice & Papad", kid_friendly: true, prep_notes: "Cook dal for sambar first", active_time_minutes: 45 },
  { id: 15, day_number: 15, week_number: 2, dinner_main: "Baked Chicken Thighs", side: "Roasted Veg & Mash", kid_friendly: true, prep_notes: "Marinate chicken 2 hrs if possible", active_time_minutes: 50 },
];

export const recipes: RecipeDetail[] = [
  { id: 1, meal_day_id: 1, ingredients: ["500g chicken thigh pieces", "2 onions sliced", "2 tomatoes pureed", "1 tbsp ginger-garlic paste", "2 tsp curry powder", "1 tsp turmeric", "1 tsp garam masala", "Salt to taste", "2 tbsp oil", "Fresh coriander", "Roti flour + water"], instructions: ["Heat oil, fry onions till golden", "Add ginger-garlic paste, cook 2 min", "Add tomatoes, cook till oil separates", "Add spices, stir 1 min", "Add chicken, sear on high 3 min", "Add 1 cup water, cover, simmer 20 min", "Garnish with coriander", "Make roti: knead flour + water + pinch salt, roll thin, cook on hot tawa both sides"], lunch_tip: "Reheat curry gently; pack rice separately" },
  { id: 2, meal_day_id: 2, ingredients: ["3 cups cooked day-old rice", "3 eggs", "1 cup mixed veggies (carrot, peas, corn)", "2 tbsp soy sauce", "1 tsp sesame oil", "2 green onions chopped", "1 tbsp oil", "For Manchurian: 1 cup cauliflower florets", "2 tbsp cornflour", "2 tbsp soy sauce", "1 tbsp chilli sauce", "1 tsp ginger minced"], instructions: ["Heat oil on high, scramble eggs, set aside", "Stir-fry veggies 2 min", "Add rice, soy sauce, sesame oil, toss 3 min", "Mix eggs back in, top with green onion", "For Manchurian: coat cauliflower in cornflour, deep fry", "Sauce: mix soy + chilli + ginger + 1/2 cup water, boil, add fried florets"], lunch_tip: "Fried rice reheats perfectly in microwave" },
  { id: 3, meal_day_id: 3, ingredients: ["400g prawns peeled", "1 onion chopped", "2 tomatoes chopped", "1 tbsp ginger-garlic paste", "2 tsp masala powder", "1 tsp turmeric", "1/2 cup coconut milk", "2 tbsp oil", "Coriander", "For Kachumber: 1 cucumber diced", "1 tomato diced", "1/4 onion diced", "Lemon juice + salt"], instructions: ["Heat oil, fry onion till soft", "Add ginger-garlic paste, cook 1 min", "Add tomatoes + spices, cook till mushy", "Add prawns, cook 4-5 min (don't overcook)", "Pour in coconut milk, simmer 5 min", "Garnish with coriander", "Kachumber: toss all ingredients together"], lunch_tip: "Prawns are best fresh; pack rice + gravy separate" },
  { id: 4, meal_day_id: 4, ingredients: ["250g paneer cubes", "2 tbsp butter", "1 onion chopped", "1 can tomato puree", "1 tbsp cream", "1 tsp kasuri methi", "1 tsp garam masala", "1 tsp chilli powder", "Salt", "Garlic naan (store-bought or homemade)"], instructions: ["Melt butter, fry onion till translucent", "Add tomato puree + spices, cook 10 min till thick", "Add paneer cubes, stir gently", "Add cream + kasuri methi, simmer 3 min", "Warm naan on tawa with butter + garlic"], lunch_tip: "Paneer reheats well; pack naan separately" },
  { id: 5, meal_day_id: 5, ingredients: ["1.5 cups basmati rice soaked", "200g mushrooms sliced", "1 cup green peas", "1 onion sliced", "2 green cardamom", "1 bay leaf", "1 cinnamon stick", "2 tbsp ghee", "Salt", "2 eggs", "Salad greens + dressing"], instructions: ["Heat ghee, add whole spices, fry 30 sec", "Add onion, fry till golden", "Add mushrooms, cook 5 min", "Add peas + drained rice, stir 2 min", "Add 2.5 cups water + salt, bring to boil", "Cover tight, lowest heat 15 min, rest 5 min", "Boil eggs 8 min, peel + halve", "Toss salad with dressing"], lunch_tip: "Pulao is great cold or room temp for lunch" },
  { id: 6, meal_day_id: 6, ingredients: ["500g chicken", "1.5 cups basmati rice soaked", "2 onions sliced + fried", "1 cup yoghurt", "2 tbsp biryani masala", "1 tsp turmeric", "Saffron threads in 2 tbsp warm milk", "Fresh mint + coriander", "2 green chillies", "Ghee", "For Mirchi ka Salan: 6 banana peppers", "1 tbsp peanut + sesame paste", "Tamarind paste"], instructions: ["Marinate chicken in yoghurt + spices 1 hr", "Cook rice till 70% done, drain", "Layer: chicken base → fried onions → rice → saffron milk + herbs", "Seal pot with dough or tight foil", "Cook on low 25 min (dum)", "For Salan: fry peppers, add peanut-sesame paste + tamarind + water, simmer"], lunch_tip: "Biryani is legendary as leftovers — even better next day" },
  { id: 7, meal_day_id: 7, ingredients: ["300g penne pasta", "1 cup mixed veg (capsicum, zucchini, cherry tomatoes)", "1 jar pasta sauce", "1 cup mozzarella grated", "1 tsp Italian herbs", "2 cloves garlic minced", "1 tbsp olive oil", "Garlic bread (store-bought)"], instructions: ["Cook pasta al dente, drain", "Heat olive oil, sauté garlic + veg 5 min", "Add pasta sauce + herbs, simmer 5 min", "Mix pasta + sauce, top with mozzarella", "Bake 180°C for 15 min till cheese bubbles", "Warm garlic bread in oven last 5 min"], lunch_tip: "Pasta bake reheats beautifully in microwave" },
  { id: 8, meal_day_id: 8, ingredients: ["1 can chickpeas drained (or 1 cup soaked)", "2 onions chopped", "2 tomatoes chopped", "1 tbsp ginger-garlic paste", "2 tsp chana masala powder", "1 tsp amchur (dry mango)", "1 tsp garam masala", "2 tbsp oil", "Roti flour + water", "Yoghurt + cucumber for raita"], instructions: ["Heat oil, fry onions till golden", "Add ginger-garlic paste, cook 1 min", "Add tomatoes + chana masala, cook 8 min", "Add chickpeas + 1 cup water, simmer 15 min", "Mash some chickpeas for thicker gravy", "Add amchur + garam masala", "Make roti, whip up raita"], lunch_tip: "Chana tastes even better the next day" },
  { id: 9, meal_day_id: 9, ingredients: ["4 eggs", "1 onion sliced", "1 tomato chopped", "1 tsp mustard seeds", "1 tsp cumin seeds", "Curry leaves", "2 tsp egg curry masala", "1/2 cup coconut milk", "2 tbsp oil", "Rice", "Salad ingredients"], instructions: ["Boil eggs 8 min, peel, poke holes with fork", "Heat oil, crackle mustard + cumin + curry leaves", "Add onion, fry till soft", "Add tomato + masala, cook 5 min", "Add coconut milk + 1/2 cup water, simmer", "Add eggs, simmer 5 min spooning gravy over", "Cook rice, prep salad"], lunch_tip: "Egg curry is a lunch MVP — packed easily" },
  { id: 10, meal_day_id: 10, ingredients: ["400g prawns peeled", "4 cloves garlic minced", "2 tbsp soy sauce", "1 tbsp oyster sauce", "1 tsp sesame oil", "1 tsp chilli flakes", "2 tbsp oil", "Spring onions", "Hokkien noodles (200g)", "Bok choy"], instructions: ["Heat oil on high, sear prawns 2 min, set aside", "Add garlic + chilli flakes, stir 30 sec", "Add bok choy, stir 1 min", "Return prawns + soy + oyster + sesame oil, toss", "Cook noodles per packet, drain, serve topped with stir-fry"], lunch_tip: "Best eaten fresh; noodles can go sticky as leftovers" },
  { id: 11, meal_day_id: 11, ingredients: ["250g paneer cubes", "200g spinach (palak)", "1 onion chopped", "2 tomatoes chopped", "1 tbsp cream", "1 tsp cumin seeds", "1 tsp garam masala", "2 green chillies", "2 tbsp butter", "1 cup basmati rice", "1 tsp cumin seeds for jeera rice", "Ghee"], instructions: ["Blanch spinach 2 min, drain, blend to paste", "Heat butter, crackle cumin + green chillies", "Add onion, fry 3 min, add tomatoes, cook 5 min", "Add spinach paste, cook 5 min", "Add paneer + cream + garam masala, simmer 3 min", "For jeera rice: heat ghee, crackle cumin, add rice + 1.5 cups water, cook 15 min"], lunch_tip: "Palak paneer reheats well; rice is fine cold" },
  { id: 12, meal_day_id: 12, ingredients: ["400g chicken breast sliced thin", "1 capsicum sliced", "1 carrot julienned", "2 tbsp soy sauce", "1 tbsp cornflour mixed in 2 tbsp water", "1 tsp ginger grated", "2 cloves garlic minced", "1 tbsp oil", "Hokkien noodles (200g)"], instructions: ["Toss chicken in cornflour slurry", "Heat oil on high, stir-fry chicken 3 min, set aside", "Add ginger + garlic, stir 30 sec", "Add capsicum + carrot, stir-fry 2 min", "Return chicken + soy sauce, toss 1 min", "Cook noodles per packet, serve together"], lunch_tip: "Stir-fry is great fresh but reheats OK" },
  { id: 13, meal_day_id: 13, ingredients: ["200g mushrooms sliced", "1 cup corn kernels", "1 onion chopped", "2 cups vegetable stock", "1 tbsp butter", "1 tbsp flour", "1/2 cup cream", "Salt + pepper", "Bread slices", "Cheese slices"], instructions: ["Melt butter, sauté onion + mushrooms 5 min", "Add flour, stir 1 min", "Add stock + corn, simmer 10 min", "Blend half for creaminess (optional)", "Add cream, season, simmer 3 min", "Make cheese toast: bread + cheese, grill till melted"], lunch_tip: "Soup keeps warm in a thermos for lunch" },
  { id: 14, meal_day_id: 14, ingredients: ["200g French beans cut", "1/2 tsp mustard seeds", "1 tsp urad dal", "1/4 cup coconut grated", "Curry leaves", "1 cup toor dal", "1 tsp sambar powder", "Tamarind paste", "Drumstick or carrot", "Rice", "Papad"], instructions: ["For poriyal: heat oil, crackle mustard + urad dal", "Add beans + curry leaves, stir-fry 5 min", "Add coconut, toss 1 min", "For sambar: cook dal till soft", "Boil veggies + tamarind + sambar powder", "Mash dal in, simmer 10 min", "Cook rice, microwave papad"], lunch_tip: "Sambar rice is peak comfort lunch" },
  { id: 15, meal_day_id: 15, ingredients: ["6 chicken thighs bone-in", "2 tbsp olive oil", "2 cloves garlic minced", "1 tsp paprika", "1 tsp dried herbs", "Salt + pepper", "4 potatoes quartered", "2 carrots chunked", "1 capsicum chunked", "1 tbsp butter", "1/4 cup milk"], instructions: ["Marinate chicken with oil + garlic + paprika + herbs + salt (2 hrs ideal)", "Preheat oven 200°C", "Toss veg in oil + salt + pepper", "Place chicken skin-up on veg tray", "Roast 35-40 min till chicken is 75°C internal", "Meanwhile boil potatoes, mash with butter + milk + salt", "Serve chicken + veg on mash"], lunch_tip: "Cold roast chicken is elite lunch material" },
];

export const defaultShoppingItems: ShoppingItem[] = [
  // Week 1
  { id: 1, week_number: 1, category: "Proteins", item: "Chicken thigh pieces", quantity: "500g", purchased: false },
  { id: 2, week_number: 1, category: "Proteins", item: "Eggs", quantity: "1 dozen", purchased: false },
  { id: 3, week_number: 1, category: "Proteins", item: "Prawns", quantity: "400g", purchased: false },
  { id: 4, week_number: 1, category: "Proteins", item: "Paneer", quantity: "250g", purchased: false },
  { id: 5, week_number: 1, category: "Proteins", item: "Chicken (biryani)", quantity: "500g", purchased: false },
  { id: 6, week_number: 1, category: "Vegetables", item: "Onions", quantity: "2kg", purchased: false },
  { id: 7, week_number: 1, category: "Vegetables", item: "Tomatoes", quantity: "1.5kg", purchased: false },
  { id: 8, week_number: 1, category: "Vegetables", item: "Mushrooms", quantity: "400g", purchased: false },
  { id: 9, week_number: 1, category: "Vegetables", item: "Green peas", quantity: "2 cups frozen", purchased: false },
  { id: 10, week_number: 1, category: "Vegetables", item: "Cucumber", quantity: "2", purchased: false },
  { id: 11, week_number: 1, category: "Vegetables", item: "Capsicum", quantity: "2", purchased: false },
  { id: 12, week_number: 1, category: "Vegetables", item: "Zucchini", quantity: "1", purchased: false },
  { id: 13, week_number: 1, category: "Vegetables", item: "Cherry tomatoes", quantity: "1 punnet", purchased: false },
  { id: 14, week_number: 1, category: "Vegetables", item: "Cauliflower", quantity: "1 small", purchased: false },
  { id: 15, week_number: 1, category: "Vegetables", item: "Green chillies", quantity: "4", purchased: false },
  { id: 16, week_number: 1, category: "Vegetables", item: "Ginger", quantity: "1 piece", purchased: false },
  { id: 17, week_number: 1, category: "Vegetables", item: "Garlic", quantity: "1 bulb", purchased: false },
  { id: 18, week_number: 1, category: "Vegetables", item: "Spring onions", quantity: "1 bunch", purchased: false },
  { id: 19, week_number: 1, category: "Vegetables", item: "Bok choy", quantity: "1 bunch", purchased: false },
  { id: 20, week_number: 1, category: "Vegetables", item: "Salad greens", quantity: "1 bag", purchased: false },
  { id: 21, week_number: 1, category: "Vegetables", item: "Banana peppers", quantity: "6", purchased: false },
  { id: 22, week_number: 1, category: "Vegetables", item: "Fresh mint", quantity: "1 bunch", purchased: false },
  { id: 23, week_number: 1, category: "Vegetables", item: "Fresh coriander", quantity: "2 bunches", purchased: false },
  { id: 24, week_number: 1, category: "Vegetables", item: "Curry leaves", quantity: "1 sprig", purchased: false },
  { id: 25, week_number: 1, category: "Dairy", item: "Yoghurt", quantity: "500g", purchased: false },
  { id: 26, week_number: 1, category: "Dairy", item: "Cream", quantity: "200ml", purchased: false },
  { id: 27, week_number: 1, category: "Dairy", item: "Mozzarella grated", quantity: "1 cup", purchased: false },
  { id: 28, week_number: 1, category: "Dairy", item: "Coconut milk", quantity: "1 can", purchased: false },
  { id: 29, week_number: 1, category: "Dairy", item: "Butter/Ghee", quantity: "250g", purchased: false },
  { id: 30, week_number: 1, category: "Dry Goods/Pantry", item: "Basmati rice", quantity: "2kg", purchased: false },
  { id: 31, week_number: 1, category: "Dry Goods/Pantry", item: "Roti flour (atta)", quantity: "1kg", purchased: false },
  { id: 32, week_number: 1, category: "Dry Goods/Pantry", item: "Penne pasta", quantity: "300g", purchased: false },
  { id: 33, week_number: 1, category: "Dry Goods/Pantry", item: "Hokkien noodles", quantity: "400g", purchased: false },
  { id: 34, week_number: 1, category: "Dry Goods/Pantry", item: "Garlic naan", quantity: "1 pack", purchased: false },
  { id: 35, week_number: 1, category: "Dry Goods/Pantry", item: "Garlic bread", quantity: "1 baguette", purchased: false },
  { id: 36, week_number: 1, category: "Dry Goods/Pantry", item: "Pasta sauce", quantity: "1 jar", purchased: false },
  { id: 37, week_number: 1, category: "Dry Goods/Pantry", item: "Soy sauce", quantity: "1 bottle", purchased: false },
  { id: 38, week_number: 1, category: "Dry Goods/Pantry", item: "Sesame oil", quantity: "1 bottle", purchased: false },
  { id: 39, week_number: 1, category: "Dry Goods/Pantry", item: "Oyster sauce", quantity: "1 bottle", purchased: false },
  { id: 40, week_number: 1, category: "Dry Goods/Pantry", item: "Vegetable stock", quantity: "2 cups / 1 cube", purchased: false },
  { id: 41, week_number: 1, category: "Dry Goods/Pantry", item: "Cornflour", quantity: "1 small pack", purchased: false },
  { id: 42, week_number: 1, category: "Dry Goods/Pantry", item: "Tamarind paste", quantity: "1 small jar", purchased: false },
  { id: 43, week_number: 1, category: "Dry Goods/Pantry", item: "Saffron threads", quantity: "1 pinch", purchased: false },
  { id: 44, week_number: 1, category: "Dry Goods/Pantry", item: "Olive oil", quantity: "1 bottle", purchased: false },
  { id: 45, week_number: 1, category: "Spices", item: "Curry powder", quantity: "1 jar", purchased: false },
  { id: 46, week_number: 1, category: "Spices", item: "Garam masala", quantity: "1 jar", purchased: false },
  { id: 47, week_number: 1, category: "Spices", item: "Turmeric", quantity: "1 jar", purchased: false },
  { id: 48, week_number: 1, category: "Spices", item: "Biryani masala", quantity: "1 jar", purchased: false },
  { id: 49, week_number: 1, category: "Spices", item: "Chana masala", quantity: "1 jar", purchased: false },
  { id: 50, week_number: 1, category: "Spices", item: "Sambar powder", quantity: "1 jar", purchased: false },
  { id: 51, week_number: 1, category: "Spices", item: "Egg curry masala", quantity: "1 jar", purchased: false },
  { id: 52, week_number: 1, category: "Spices", item: "Italian herbs", quantity: "1 jar", purchased: false },
  { id: 53, week_number: 1, category: "Spices", item: "Chilli flakes", quantity: "1 jar", purchased: false },
  { id: 54, week_number: 1, category: "Spices", item: "Paprika", quantity: "1 jar", purchased: false },
  { id: 55, week_number: 1, category: "Spices", item: "Mustard seeds", quantity: "1 jar", purchased: false },
  { id: 56, week_number: 1, category: "Spices", item: "Cumin seeds", quantity: "1 jar", purchased: false },
  { id: 57, week_number: 1, category: "Spices", item: "Kasuri methi", quantity: "1 jar", purchased: false },
  { id: 58, week_number: 1, category: "Spices", item: "Green cardamom", quantity: "4 pods", purchased: false },
  { id: 59, week_number: 1, category: "Spices", item: "Bay leaves", quantity: "2", purchased: false },
  { id: 60, week_number: 1, category: "Spices", item: "Cinnamon stick", quantity: "1", purchased: false },
  // Week 2
  { id: 61, week_number: 2, category: "Proteins", item: "Chickpeas (canned)", quantity: "1 can", purchased: false },
  { id: 62, week_number: 2, category: "Proteins", item: "Eggs", quantity: "6", purchased: false },
  { id: 63, week_number: 2, category: "Proteins", item: "Prawns", quantity: "400g", purchased: false },
  { id: 64, week_number: 2, category: "Proteins", item: "Paneer", quantity: "500g", purchased: false },
  { id: 65, week_number: 2, category: "Proteins", item: "Chicken breast", quantity: "400g", purchased: false },
  { id: 66, week_number: 2, category: "Proteins", item: "Chicken thighs (bone-in)", quantity: "6 pieces", purchased: false },
  { id: 67, week_number: 2, category: "Proteins", item: "Toor dal", quantity: "1 cup", purchased: false },
  { id: 68, week_number: 2, category: "Vegetables", item: "Onions", quantity: "1.5kg", purchased: false },
  { id: 69, week_number: 2, category: "Vegetables", item: "Tomatoes", quantity: "1kg", purchased: false },
  { id: 70, week_number: 2, category: "Vegetables", item: "Mushrooms", quantity: "400g", purchased: false },
  { id: 71, week_number: 2, category: "Vegetables", item: "French beans", quantity: "200g", purchased: false },
  { id: 72, week_number: 2, category: "Vegetables", item: "Spinach (palak)", quantity: "200g", purchased: false },
  { id: 73, week_number: 2, category: "Vegetables", item: "Capsicum", quantity: "2", purchased: false },
  { id: 74, week_number: 2, category: "Vegetables", item: "Carrot", quantity: "2", purchased: false },
  { id: 75, week_number: 2, category: "Vegetables", item: "Corn kernels", quantity: "1 cup", purchased: false },
  { id: 76, week_number: 2, category: "Vegetables", item: "Potatoes", quantity: "4 medium", purchased: false },
  { id: 77, week_number: 2, category: "Vegetables", item: "Bok choy", quantity: "1 bunch", purchased: false },
  { id: 78, week_number: 2, category: "Vegetables", item: "Drumstick or carrot", quantity: "2 pieces", purchased: false },
  { id: 79, week_number: 2, category: "Vegetables", item: "Ginger", quantity: "1 piece", purchased: false },
  { id: 80, week_number: 2, category: "Vegetables", item: "Garlic", quantity: "1 bulb", purchased: false },
  { id: 81, week_number: 2, category: "Vegetables", item: "Curry leaves", quantity: "1 sprig", purchased: false },
  { id: 82, week_number: 2, category: "Vegetables", item: "Fresh coriander", quantity: "1 bunch", purchased: false },
  { id: 83, week_number: 2, category: "Dairy", item: "Coconut milk", quantity: "1 can", purchased: false },
  { id: 84, week_number: 2, category: "Dairy", item: "Cream", quantity: "200ml", purchased: false },
  { id: 85, week_number: 2, category: "Dairy", item: "Butter", quantity: "100g", purchased: false },
  { id: 86, week_number: 2, category: "Dairy", item: "Milk", quantity: "1/4 cup", purchased: false },
  { id: 87, week_number: 2, category: "Dairy", item: "Coconut grated", quantity: "1/4 cup", purchased: false },
  { id: 88, week_number: 2, category: "Dry Goods/Pantry", item: "Basmati rice", quantity: "1kg", purchased: false },
  { id: 89, week_number: 2, category: "Dry Goods/Pantry", item: "Hokkien noodles", quantity: "400g", purchased: false },
  { id: 90, week_number: 2, category: "Dry Goods/Pantry", item: "Bread slices", quantity: "1 loaf", purchased: false },
  { id: 91, week_number: 2, category: "Dry Goods/Pantry", item: "Cheese slices", quantity: "6", purchased: false },
  { id: 92, week_number: 2, category: "Dry Goods/Pantry", item: "Papad", quantity: "1 pack", purchased: false },
  { id: 93, week_number: 2, category: "Dry Goods/Pantry", item: "Soy sauce", quantity: "1 bottle", purchased: false },
  { id: 94, week_number: 2, category: "Dry Goods/Pantry", item: "Oyster sauce", quantity: "1 bottle", purchased: false },
  { id: 95, week_number: 2, category: "Dry Goods/Pantry", item: "Vegetable stock", quantity: "2 cups", purchased: false },
  { id: 96, week_number: 2, category: "Dry Goods/Pantry", item: "Tamarind paste", quantity: "1 small jar", purchased: false },
  { id: 97, week_number: 2, category: "Dry Goods/Pantry", item: "Cornflour", quantity: "1 small pack", purchased: false },
  { id: 98, week_number: 2, category: "Dry Goods/Pantry", item: "Olive oil", quantity: "1 bottle", purchased: false },
  { id: 99, week_number: 2, category: "Spices", item: "Chana masala powder", quantity: "1 jar", purchased: false },
  { id: 100, week_number: 2, category: "Spices", item: "Garam masala", quantity: "1 jar", purchased: false },
  { id: 101, week_number: 2, category: "Spices", item: "Turmeric", quantity: "1 jar", purchased: false },
  { id: 102, week_number: 2, category: "Spices", item: "Sambar powder", quantity: "1 jar", purchased: false },
  { id: 103, week_number: 2, category: "Spices", item: "Amchur (dry mango)", quantity: "1 jar", purchased: false },
  { id: 104, week_number: 2, category: "Spices", item: "Mustard seeds", quantity: "1 jar", purchased: false },
  { id: 105, week_number: 2, category: "Spices", item: "Cumin seeds", quantity: "1 jar", purchased: false },
  { id: 106, week_number: 2, category: "Spices", item: "Urad dal", quantity: "1 small pack", purchased: false },
  { id: 107, week_number: 2, category: "Spices", item: "Paprika", quantity: "1 jar", purchased: false },
  { id: 108, week_number: 2, category: "Spices", item: "Dried herbs (mixed)", quantity: "1 jar", purchased: false },
];

import { useEffect, useMemo, useState } from 'react';
import { BookOpen, CalendarDays, Check, ChefHat, Clock, Egg, Flame, Leaf, RotateCcw, Salad, ShoppingBasket, Sparkles, Utensils, X } from 'lucide-react';
import { mealDays as staticMealDays, recipes as staticRecipes, defaultShoppingItems, type MealDay, type RecipeDetail, type ShoppingItem } from '../data/meals';

const STORAGE_KEY = 'family-dinner-os-shopping';

const categoryRank: Record<string, number> = {
  Proteins: 1,
  Vegetables: 2,
  Dairy: 3,
  'Dry Goods/Pantry': 4,
  Spices: 5,
};

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

function loadShoppingItems(): ShoppingItem[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return defaultShoppingItems.map(item => ({ ...item, purchased: false }));
}

function saveShoppingItems(items: ShoppingItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export default function FamilyDinnerOS() {
  const [mealDays] = useState<MealDay[]>(staticMealDays);
  const [recipes] = useState<RecipeDetail[]>(staticRecipes);
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>(loadShoppingItems);
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedMeal, setSelectedMeal] = useState<MealDay | null>(null);
  const [newItem, setNewItem] = useState({ category: 'Vegetables', item: '', quantity: '' });

  useEffect(() => {
    saveShoppingItems(shoppingItems);
  }, [shoppingItems]);

  const prepMeals = useMemo(
    () => mealDays.filter((meal) => meal.prep_notes && meal.prep_notes.toLowerCase() !== 'none').sort((a, b) => a.day_number - b.day_number),
    [mealDays]
  );

  const selectedRecipe = useMemo(
    () => selectedMeal ? recipes.find((recipe) => recipe.meal_day_id === selectedMeal.day_number) || null : null,
    [recipes, selectedMeal]
  );

  const weekItems = useMemo(
    () => shoppingItems.filter((item) => item.week_number === selectedWeek),
    [shoppingItems, selectedWeek]
  );

  const groupedShopping = useMemo(() => {
    const grouped = weekItems.reduce<Record<string, ShoppingItem[]>>((acc, item) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item);
      return acc;
    }, {});
    return Object.entries(grouped).sort(([a], [b]) => (categoryRank[a] || 99) - (categoryRank[b] || 99));
  }, [weekItems]);

  const completedCount = weekItems.filter((item) => item.purchased).length;
  const progress = weekItems.length ? Math.round((completedCount / weekItems.length) * 100) : 0;
  const kidFriendlyCount = mealDays.filter((meal) => meal.kid_friendly).length;
  const averageCookTime = mealDays.length ? Math.round(mealDays.reduce((sum, meal) => sum + meal.active_time_minutes, 0) / mealDays.length) : 0;

  const togglePurchased = (item: ShoppingItem) => {
    setShoppingItems(prev => prev.map(i => i.id === item.id ? { ...i, purchased: !i.purchased } : i));
  };

  const resetWeek = () => {
    setShoppingItems(prev => prev.map(i => i.week_number === selectedWeek ? { ...i, purchased: false } : i));
  };

  const addShoppingItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newItem.item.trim() || !newItem.quantity.trim()) return;
    const maxId = shoppingItems.reduce((max, i) => Math.max(max, i.id), 0);
    const newItemObj: ShoppingItem = {
      id: maxId + 1,
      week_number: selectedWeek,
      category: newItem.category,
      item: newItem.item.trim(),
      quantity: newItem.quantity.trim(),
      purchased: false,
    };
    setShoppingItems(prev => [...prev, newItemObj]);
    setNewItem(current => ({ ...current, item: '', quantity: '' }));
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8ec] text-slate-900">
      <section className="relative isolate px-5 py-8 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#ffd88a_0,transparent_34%),radial-gradient(circle_at_75%_12%,#b7f0ce_0,transparent_28%),linear-gradient(135deg,#fff8ec_0%,#f7efe2_100%)]" />
        <div className="mx-auto max-w-7xl">
          <nav className="mb-10 flex flex-col gap-4 rounded-full border border-white/70 bg-white/60 px-5 py-4 shadow-sm backdrop-blur md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-700 text-white shadow-lg shadow-emerald-900/10">
                <ChefHat size={23} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-800">Family Dinner OS</p>
                <h1 className="text-xl font-black tracking-tight sm:text-2xl">15-Day Practical Meal Plan</h1>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-slate-700">
              <span className="rounded-full bg-amber-100 px-4 py-2">No beef or pork</span>
              <span className="rounded-full bg-emerald-100 px-4 py-2">Dinner = next-day lunch</span>
              <span className="rounded-full bg-rose-100 px-4 py-2">Family of 3</span>
            </div>
          </nav>

          <div className="grid gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/75 px-4 py-2 text-sm font-bold text-emerald-900 shadow-sm">
                <Sparkles size={16} /> Rotates beans, roti, eggs, chicken, mushrooms, paneer, prawns, and baked veg
              </div>
              <h2 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Cook once at dinner. Pack lunch without re-planning.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                A meal planning dashboard with a 15-day chart, week-by-week grocery lists, prep warnings, clickable recipe cards, and a shopping checklist sized for two adults and one 4-year-old.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <StatCard icon={<CalendarDays />} label="Planned dinners" value={mealDays.length || '—'} />
                <StatCard icon={<Clock />} label="Avg. active cook" value={averageCookTime ? `${averageCookTime} min` : '—'} />
                <StatCard icon={<Egg />} label="Kid-friendly flags" value={kidFriendlyCount || '—'} />
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-2xl shadow-amber-900/10 backdrop-blur">
              <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-amber-400 p-3 text-slate-950"><Utensils /></div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-amber-200">System goal</p>
                    <h3 className="text-2xl font-black">Zero decision fatigue</h3>
                  </div>
                </div>
                <div className="mt-6 space-y-4 text-slate-200">
                  <ChecklistLine text="No main dish repeats within 4–5 days." />
                  <ChecklistLine text="Weekday meals stay around one hour active cooking." />
                  <ChecklistLine text="Tap any meal card for ingredients and steps." />
                  <ChecklistLine text="Leftovers are intentionally lunch-ready." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.24em] text-emerald-800"><Salad size={16} /> 15-Day Meal Chart</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Click a card for ingredients and cooking instructions</h2>
          </div>
          <a href="#shopping" className="rounded-full bg-slate-950 px-5 py-3 text-center font-bold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-emerald-800">Jump to shopping lists</a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mealDays.map((meal) => (
            <button key={meal.id} onClick={() => setSelectedMeal(meal)} className="group rounded-[1.6rem] border border-amber-100 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/10 focus:outline-none focus:ring-4 focus:ring-amber-300">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-700">Day {meal.day_number}</p>
                  <h3 className="mt-1 text-xl font-black leading-tight text-slate-950">{meal.dinner_main}</h3>
                </div>
                {meal.kid_friendly && <span className="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800">Kid-friendly</span>}
              </div>
              <div className="space-y-3 text-sm leading-6 text-slate-700">
                <p className="flex gap-2"><Utensils className="mt-0.5 h-4 w-4 text-emerald-700" /> <span><b>Side:</b> {meal.side}</span></p>
                <p className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 text-amber-700" /> <span><b>Active cook:</b> about {meal.active_time_minutes} minutes</span></p>
                {meal.prep_notes && meal.prep_notes.toLowerCase() !== 'none' ? (
                  <p className="rounded-2xl bg-amber-50 p-3 font-semibold text-amber-900"><b>Prep:</b> {meal.prep_notes}</p>
                ) : (
                  <p className="rounded-2xl bg-slate-50 p-3 font-semibold text-slate-600">No advance prep required.</p>
                )}
                <p className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 font-black text-white transition group-hover:bg-emerald-800"><BookOpen size={16} /> View recipe</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 lg:px-12" id="shopping">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.24em] text-amber-300"><ShoppingBasket size={16} /> Shopping Lists</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">Two grocery runs, grouped by category.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">Toggle items as you shop. Add household extras without disrupting the meal plan — everything saves to your browser automatically.</p>

              <div className="mt-8 rounded-[1.5rem] bg-white/10 p-5 ring-1 ring-white/10">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <p className="font-black">Week {selectedWeek} progress</p>
                  <p className="text-2xl font-black text-amber-300">{progress}%</p>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-amber-300 transition-all" style={{ width: `${progress}%` }} />
                </div>
                <p className="mt-3 text-sm text-slate-300">{completedCount} of {weekItems.length} items checked</p>
              </div>

              <div className="mt-6 flex gap-3">
                <button onClick={() => setSelectedWeek(1)} className={classNames('rounded-full px-5 py-3 font-black transition', selectedWeek === 1 ? 'bg-amber-300 text-slate-950' : 'bg-white/10 text-white hover:bg-white/15')}>Week 1 · Days 1–7</button>
                <button onClick={() => setSelectedWeek(2)} className={classNames('rounded-full px-5 py-3 font-black transition', selectedWeek === 2 ? 'bg-amber-300 text-slate-950' : 'bg-white/10 text-white hover:bg-white/15')}>Week 2 · Days 8–15</button>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-5 text-slate-950 shadow-2xl shadow-black/20">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-2xl font-black">Week {selectedWeek} list</h3>
                <button onClick={resetWeek} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-800 transition hover:bg-slate-200"><RotateCcw size={16} /> Reset checks</button>
              </div>

              <form onSubmit={addShoppingItem} className="mb-6 grid gap-2 rounded-3xl bg-emerald-50 p-3 md:grid-cols-[1fr_1fr_1fr_auto]">
                <select value={newItem.category} onChange={(event) => setNewItem({ ...newItem, category: event.target.value })} className="rounded-2xl border border-emerald-100 bg-white px-3 py-3 font-semibold outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Proteins</option>
                  <option>Vegetables</option>
                  <option>Dairy</option>
                  <option>Dry Goods/Pantry</option>
                  <option>Spices</option>
                </select>
                <input value={newItem.item} onChange={(event) => setNewItem({ ...newItem, item: event.target.value })} placeholder="Add item" className="rounded-2xl border border-emerald-100 bg-white px-3 py-3 font-semibold outline-none focus:ring-2 focus:ring-emerald-500" />
                <input value={newItem.quantity} onChange={(event) => setNewItem({ ...newItem, quantity: event.target.value })} placeholder="Quantity" className="rounded-2xl border border-emerald-100 bg-white px-3 py-3 font-semibold outline-none focus:ring-2 focus:ring-emerald-500" />
                <button className="rounded-2xl bg-emerald-700 px-5 py-3 font-black text-white transition hover:bg-emerald-800">Add</button>
              </form>

              <div className="space-y-5">
                {groupedShopping.map(([category, items]) => (
                  <div key={category} className="rounded-3xl border border-slate-100 p-4">
                    <h4 className="mb-3 flex items-center gap-2 text-lg font-black"><Leaf className="h-5 w-5 text-emerald-700" /> {category}</h4>
                    <div className="grid gap-2">
                      {items.map((item) => (
                        <button key={item.id} onClick={() => togglePurchased(item)} className={classNames('flex items-center justify-between gap-4 rounded-2xl px-4 py-3 text-left transition', item.purchased ? 'bg-emerald-50 text-slate-500' : 'bg-slate-50 hover:bg-amber-50')}>
                          <span className="flex items-center gap-3">
                            <span className={classNames('flex h-6 w-6 items-center justify-center rounded-full border', item.purchased ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300 bg-white')}>
                              {item.purchased && <Check size={15} />}
                            </span>
                            <span className={classNames('font-bold', item.purchased && 'line-through')}>{item.item}</span>
                          </span>
                          <span className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-black text-slate-700 shadow-sm">{item.quantity}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] border border-amber-100 bg-white p-6 shadow-xl shadow-amber-900/5 sm:p-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.24em] text-amber-700"><Flame size={16} /> Prep Notes</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Do these before the day starts</h2>
            </div>
            <p className="max-w-xl text-slate-600">Legume soaks, chicken marinades, and thawing reminders — all from the meal plan.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {prepMeals.map((meal) => (
              <div key={meal.id} className="rounded-3xl bg-amber-50 p-5">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-800">Day {meal.day_number}</p>
                <h3 className="mt-1 font-black text-slate-950">{meal.dinner_main}</h3>
                <p className="mt-2 leading-7 text-slate-700">{meal.prep_notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedMeal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-6" onClick={() => setSelectedMeal(null)}>
          <section className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-t-[2rem] bg-white p-5 shadow-2xl sm:rounded-[2rem] sm:p-8" onClick={(event) => event.stopPropagation()}>
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-700">Day {selectedMeal.day_number} recipe</p>
                <h2 className="mt-1 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{selectedMeal.dinner_main}</h2>
                <p className="mt-3 text-slate-600"><b>Serve with:</b> {selectedMeal.side}</p>
              </div>
              <button onClick={() => setSelectedMeal(null)} className="rounded-full bg-slate-100 p-3 text-slate-700 transition hover:bg-slate-200" aria-label="Close recipe"><X /></button>
            </div>

            {selectedRecipe ? (
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[1.5rem] bg-emerald-50 p-5">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-black"><ShoppingBasket className="text-emerald-700" /> Ingredients</h3>
                  <ul className="space-y-3">
                    {selectedRecipe.ingredients.map((ingredient) => (
                      <li key={ingredient} className="flex gap-3 rounded-2xl bg-white p-3 font-semibold text-slate-700">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[1.5rem] bg-amber-50 p-5">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-black"><BookOpen className="text-amber-700" /> Cooking instructions</h3>
                  <ol className="space-y-3">
                    {selectedRecipe.instructions.map((step, index) => (
                      <li key={step} className="flex gap-3 rounded-2xl bg-white p-3 leading-7 text-slate-700">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-400 text-sm font-black text-slate-950">{index + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-5 rounded-2xl bg-slate-950 p-4 text-white">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">Lunch tip</p>
                    <p className="mt-2 leading-7 text-slate-200">{selectedRecipe.lunch_tip}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-3xl bg-slate-50 p-8 text-center font-bold text-slate-600">Recipe details are not available yet for this meal.</div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) {
  return (
    <div className="rounded-3xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur">
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-white">{icon}</div>
      <p className="text-sm font-bold text-slate-600">{label}</p>
      <p className="text-3xl font-black text-slate-950">{value}</p>
    </div>
  );
}

function ChecklistLine({ text }: { text: string }) {
  return (
    <div className="flex gap-3">
      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-slate-950"><Check size={13} strokeWidth={4} /></span>
      <p className="font-semibold leading-7">{text}</p>
    </div>
  );
}

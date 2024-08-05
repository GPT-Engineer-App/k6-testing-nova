import { useState, useEffect } from 'react';
import { Paw, Heart, Info, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const DogBreeds = () => {
  const breeds = [
    { name: 'Labrador Retriever', trait: 'Friendly and Outgoing' },
    { name: 'German Shepherd', trait: 'Loyal and Courageous' },
    { name: 'Golden Retriever', trait: 'Intelligent and Devoted' },
    { name: 'French Bulldog', trait: 'Playful and Adaptable' },
    { name: 'Bulldog', trait: 'Calm and Courageous' },
    { name: 'Poodle', trait: 'Proud and Clever' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {breeds.map((breed, index) => (
        <motion.div
          key={breed.name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>{breed.name}</CardTitle>
              <CardDescription>{breed.trait}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <img 
                src={`https://source.unsplash.com/400x300/?${breed.name.toLowerCase().replace(' ', '-')}`} 
                alt={breed.name} 
                className="w-full h-48 object-cover rounded-md mb-2" 
              />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const FunFacts = () => {
  const facts = [
    { fact: "Dogs have a sense of smell that's up to 100,000 times stronger than humans.", icon: "🐕" },
    { fact: "The Basenji is the only breed of dog that can't bark, but they can yodel!", icon: "🎵" },
    { fact: "A dog's nose print is unique, much like a human's fingerprint.", icon: "👃" },
    { fact: "Greyhounds can reach speeds of up to 45 miles per hour.", icon: "🏃" },
    { fact: "The tallest dog ever recorded was a Great Dane named Zeus, who stood at 44 inches tall.", icon: "📏" },
  ];

  return (
    <ul className="space-y-4">
      {facts.map((item, index) => (
        <motion.li
          key={index}
          className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <span className="text-2xl">{item.icon}</span>
          <span>{item.fact}</span>
        </motion.li>
      ))}
    </ul>
  );
};

const CareTips = () => {
  const tips = [
    { tip: "Provide a balanced diet appropriate for your dog's age, size, and activity level.", category: "Nutrition" },
    { tip: "Ensure your dog gets regular exercise through walks, playtime, and mental stimulation.", category: "Exercise" },
    { tip: "Schedule regular check-ups with your veterinarian for vaccinations and health screenings.", category: "Health" },
    { tip: "Groom your dog regularly, including brushing their coat and teeth.", category: "Grooming" },
    { tip: "Socialize your dog from an early age to help them become well-adjusted adults.", category: "Training" },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-center mb-4">Essential Dog Care Tips</h3>
      {tips.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white p-4 rounded-lg shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex justify-between items-center mb-2">
            <Badge variant="secondary">{item.category}</Badge>
          </div>
          <p>{item.tip}</p>
        </motion.div>
      ))}
    </div>
  );
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("breeds");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-bold mb-8 text-center text-blue-800"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          All About Dogs
        </motion.h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="breeds" className="text-lg"><Paw className="mr-2 h-5 w-5" /> Dog Breeds</TabsTrigger>
            <TabsTrigger value="facts" className="text-lg"><Info className="mr-2 h-5 w-5" /> Fun Facts</TabsTrigger>
            <TabsTrigger value="care" className="text-lg"><Heart className="mr-2 h-5 w-5" /> Care Tips</TabsTrigger>
          </TabsList>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TabsContent value="breeds">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl text-blue-700">Popular Dog Breeds</CardTitle>
                  <CardDescription className="text-lg">Explore some of the most beloved dog breeds.</CardDescription>
                </CardHeader>
                <CardContent>
                  <DogBreeds />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="facts">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl text-blue-700">Fun Dog Facts</CardTitle>
                  <CardDescription className="text-lg">Discover interesting facts about our canine companions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <FunFacts />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="care">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl text-blue-700">Dog Care Tips</CardTitle>
                  <CardDescription className="text-lg">Learn how to keep your furry friend happy and healthy.</CardDescription>
                </CardHeader>
                <CardContent>
                  <CareTips />
                </CardContent>
              </Card>
            </TabsContent>
          </motion.div>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Index;

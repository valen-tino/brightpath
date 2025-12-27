import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Info, AlertCircle, CheckCircle2, User, Calendar as CalendarIcon, CreditCard, Settings } from 'lucide-react';
import { Checkbox } from '../components/ui/checkbox';
import { Switch } from '../components/ui/switch';
import { Separator } from '../components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';
import { Calendar } from '../components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../components/ui/dropdown-menu';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../components/ui/hover-card';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { Progress } from '../components/ui/progress';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { ScrollArea } from '../components/ui/scroll-area';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../components/ui/select';
import { Slider } from '../components/ui/slider';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Textarea } from '../components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../components/ui/sheet';
import { ToggleGroup, ToggleGroupItem } from '../components/ui/toggle-group';
import { Skeleton } from '../components/ui/skeleton';

export default function DesignSystem() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="bg-warm-cream min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6 space-y-24">
        
        {/* Header */}
        <div className="space-y-6 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-heading font-bold text-deep-sage">BrightPath Design System</h1>
          <p className="text-xl text-dark-gray/80 font-body leading-relaxed">
            A unified design language ensuring consistency, accessibility, and brand integrity across all digital touchpoints.
          </p>
        </div>

        {/* Colors */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 pb-4 border-b border-border">
             <h2 className="text-3xl font-heading font-bold text-deep-sage">01. Color Palette</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Primary Colors */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-dark-gray">Primary Brand</h3>
              <div className="space-y-3">
                <ColorCard name="Deep Sage" hex="#3d5a47" className="bg-deep-sage text-white" />
                <ColorCard name="Warm Cream" hex="#faf8f3" className="bg-warm-cream text-dark-gray border border-border" />
              </div>
            </div>

            {/* Accent Colors */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-dark-gray">Accents</h3>
              <div className="space-y-3">
                <ColorCard name="Warm Gold" hex="#d4a574" className="bg-warm-gold text-white" />
                <ColorCard name="Soft Coral" hex="#e8a89a" className="bg-soft-coral text-deep-sage" />
              </div>
            </div>

            {/* Neutral Colors */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-dark-gray">Neutrals</h3>
              <div className="space-y-3">
                 <ColorCard name="Dark Gray" hex="#4a4a4a" className="bg-dark-gray text-white" />
                 <ColorCard name="Light Gray" hex="#f5f5f5" className="bg-light-gray text-dark-gray border border-border" />
                 <ColorCard name="White" hex="#ffffff" className="bg-white text-dark-gray border border-border" />
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 pb-4 border-b border-border">
             <h2 className="text-3xl font-heading font-bold text-deep-sage">02. Typography</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
               <div className="p-8 bg-white rounded-xl border border-border shadow-sm">
                 <span className="text-xs font-bold text-warm-gold uppercase tracking-widest mb-4 block">Headings & Body (Lato)</span>
                 <h1 className="font-heading text-5xl font-bold text-deep-sage mb-4">Heading 1</h1>
                 <h2 className="font-heading text-4xl font-bold text-deep-sage mb-4">Heading 2</h2>
                 <h3 className="font-heading text-3xl font-bold text-deep-sage mb-4">Heading 3</h3>
                 <h4 className="font-heading text-2xl font-bold text-deep-sage mb-4">Heading 4</h4>
                 <p className="font-body text-dark-gray leading-relaxed text-lg">
                   The quick brown fox jumps over the lazy dog. Lato is a sans-serif typeface family designed in the summer of 2010 by Warsaw-based designer Łukasz Dziedzic. "Lato" means "Summer" in Polish.
                 </p>
               </div>
            </div>
            
            <div className="space-y-8">
               <div className="p-8 bg-deep-sage rounded-xl border border-border shadow-sm text-white">
                 <span className="text-xs font-bold text-warm-gold uppercase tracking-widest mb-4 block">Dark Background Context</span>
                 <h2 className="font-heading text-4xl font-bold text-white mb-4">Clean & Minimalist</h2>
                 <p className="font-body text-warm-cream/90 leading-relaxed text-lg">
                   When using text on dark backgrounds, we ensure sufficient contrast for readability. The warm cream text creates a softer, more inviting look than pure white.
                 </p>
               </div>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 pb-4 border-b border-border">
             <h2 className="text-3xl font-heading font-bold text-deep-sage">03. UI Components</h2>
          </div>

          <Tabs defaultValue="forms" className="w-full">
            <div className="w-full overflow-x-auto pb-4">
              <TabsList className="w-full justify-start md:justify-center bg-white border border-border h-auto p-1 gap-1">
                <TabsTrigger value="forms" className="px-4 py-2">Forms</TabsTrigger>
                <TabsTrigger value="structure" className="px-4 py-2">Structure</TabsTrigger>
                <TabsTrigger value="feedback" className="px-4 py-2">Feedback</TabsTrigger>
                <TabsTrigger value="overlays" className="px-4 py-2">Overlays</TabsTrigger>
                <TabsTrigger value="data" className="px-4 py-2">Data & Nav</TabsTrigger>
              </TabsList>
            </div>
            
            <div className="mt-8">
              {/* Forms Tab */}
              <TabsContent value="forms" className="space-y-8">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8 bg-white rounded-xl border border-border space-y-8">
                       <h3 className="font-bold text-xl text-deep-sage mb-4">Input Fields</h3>
                       <div className="space-y-4">
                         <div className="space-y-2">
                           <Label htmlFor="email-input">Email</Label>
                           <Input id="email-input" placeholder="hello@example.com" />
                         </div>
                         <div className="space-y-2">
                           <Label htmlFor="textarea-input">Message</Label>
                           <Textarea id="textarea-input" placeholder="Type your message here." />
                         </div>
                       </div>
                    </div>

                    <div className="p-8 bg-white rounded-xl border border-border space-y-8">
                       <h3 className="font-bold text-xl text-deep-sage mb-4">Selection Controls</h3>
                       <div className="space-y-6">
                         <div className="flex items-center space-x-2">
                           <Checkbox id="terms-check" />
                           <Label htmlFor="terms-check">Accept terms and conditions</Label>
                         </div>
                         
                         <div className="flex items-center space-x-2">
                            <Switch id="notifications-switch" />
                            <Label htmlFor="notifications-switch">Enable notifications</Label>
                         </div>

                         <div className="space-y-2">
                            <Label>Choose a plan</Label>
                            <RadioGroup defaultValue="free">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="free" id="r1" />
                                <Label htmlFor="r1">Free</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="pro" id="r2" />
                                <Label htmlFor="r2">Pro</Label>
                              </div>
                            </RadioGroup>
                         </div>
                       </div>
                    </div>

                    <div className="p-8 bg-white rounded-xl border border-border space-y-8">
                       <h3 className="font-bold text-xl text-deep-sage mb-4">Advanced Inputs</h3>
                       <div className="space-y-6">
                          <div className="space-y-2">
                            <Label>Select Service</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Design</SelectLabel>
                                  <SelectItem value="web">Web Design</SelectItem>
                                  <SelectItem value="brand">Branding</SelectItem>
                                  <SelectItem value="ui">UI/UX</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-4">
                            <Label>Budget Range: $10k - $50k</Label>
                            <Slider defaultValue={[33]} max={100} step={1} />
                          </div>

                          <div className="space-y-2">
                            <Label>Toggle Group</Label>
                            <ToggleGroup type="single" variant="outline">
                              <ToggleGroupItem value="a">A</ToggleGroupItem>
                              <ToggleGroupItem value="b">B</ToggleGroupItem>
                              <ToggleGroupItem value="c">C</ToggleGroupItem>
                            </ToggleGroup>
                          </div>
                       </div>
                    </div>
                    
                    <div className="p-8 bg-white rounded-xl border border-border space-y-8">
                       <h3 className="font-bold text-xl text-deep-sage mb-4">Date & Calendar</h3>
                       <div className="flex justify-center">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border shadow-sm bg-white"
                          />
                       </div>
                    </div>
                 </div>
              </TabsContent>

              {/* Structure Tab */}
              <TabsContent value="structure" className="space-y-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Buttons */}
                    <div className="p-8 bg-white rounded-xl border border-border space-y-6 col-span-1 md:col-span-2">
                        <h3 className="font-bold text-xl text-deep-sage">Buttons</h3>
                        <div className="flex flex-wrap gap-4 items-center">
                          <Button>Default Primary</Button>
                          <Button variant="secondary">Secondary</Button>
                          <Button variant="outline">Outline</Button>
                          <Button variant="ghost">Ghost</Button>
                          <Button variant="link">Link Button</Button>
                          <Button variant="destructive">Destructive</Button>
                        </div>
                        <Separator />
                        <div className="flex flex-wrap gap-4 items-center">
                          <Button size="lg">Large Button</Button>
                          <Button>Default Size</Button>
                          <Button size="sm">Small</Button>
                          <Button size="icon" className="h-10 w-10">
                            <CheckCircle2 className="h-4 w-4" />
                          </Button>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description goes here.</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p>This is the main content of the card. It can contain text, images, or other components.</p>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full">Action</Button>
                          </CardFooter>
                        </Card>

                        <Card className="bg-deep-sage text-white border-none">
                          <CardHeader>
                            <CardTitle className="text-white">Dark Card</CardTitle>
                            <CardDescription className="text-warm-cream/70">Alternative style</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p>Used for highlighting specific content or creating visual interest in grid layouts.</p>
                          </CardContent>
                          <CardFooter>
                            <Button variant="secondary" className="w-full">Action</Button>
                          </CardFooter>
                        </Card>
                    </div>

                    {/* Scroll Area */}
                    <div className="p-8 bg-white rounded-xl border border-border space-y-6">
                      <h3 className="font-bold text-xl text-deep-sage">Scroll Area</h3>
                      <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                        <div className="mb-4 text-sm font-bold text-deep-sage">Tags</div>
                        {Array.from({ length: 50 }).map((_, i) => (
                          <div key={i} className="text-sm border-b py-2 text-dark-gray">
                            Item {i + 1}
                          </div>
                        ))}
                      </ScrollArea>
                    </div>
                 </div>
              </TabsContent>

              {/* Feedback Tab */}
              <TabsContent value="feedback" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="p-8 bg-white rounded-xl border border-border space-y-6">
                      <h3 className="font-bold text-xl text-deep-sage">Alerts</h3>
                      <div className="space-y-4">
                        <Alert>
                          <Info className="h-4 w-4" />
                          <AlertTitle>Heads up!</AlertTitle>
                          <AlertDescription>Standard alert component.</AlertDescription>
                        </Alert>
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Error</AlertTitle>
                          <AlertDescription>Something went wrong.</AlertDescription>
                        </Alert>
                        <Alert className="border-deep-sage bg-deep-sage/10 text-deep-sage">
                          <CheckCircle2 className="h-4 w-4 text-deep-sage" />
                          <AlertTitle className="text-deep-sage">Success</AlertTitle>
                          <AlertDescription className="text-deep-sage/90">Action completed.</AlertDescription>
                        </Alert>
                      </div>
                   </div>

                   <div className="p-8 bg-white rounded-xl border border-border space-y-6">
                      <h3 className="font-bold text-xl text-deep-sage">Status Indicators</h3>
                      <div className="space-y-6">
                         <div className="space-y-2">
                           <Label>Progress</Label>
                           <Progress value={66} className="w-full" />
                         </div>
                         <div className="space-y-2">
                           <Label className="block mb-2">Badges</Label>
                           <div className="flex gap-2">
                             <Badge>Default</Badge>
                             <Badge variant="secondary">Secondary</Badge>
                             <Badge variant="outline">Outline</Badge>
                             <Badge variant="destructive">Destructive</Badge>
                           </div>
                         </div>
                         <div className="space-y-2">
                            <Label className="block mb-2">Skeleton Loading</Label>
                            <div className="flex items-center space-x-4">
                              <Skeleton className="h-12 w-12 rounded-full" />
                              <div className="space-y-2">
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[150px]" />
                              </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
              </TabsContent>

              {/* Overlays Tab */}
              <TabsContent value="overlays" className="space-y-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-8 bg-white rounded-xl border border-border space-y-6">
                       <h3 className="font-bold text-xl text-deep-sage">Dialogs</h3>
                       <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline">Open Dialog</Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Edit profile</DialogTitle>
                              <DialogDescription>
                                Make changes to your profile here. Click save when you're done.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">Name</Label>
                                <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">Username</Label>
                                <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button type="submit">Save changes</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                    </div>

                    <div className="p-8 bg-white rounded-xl border border-border space-y-6">
                       <h3 className="font-bold text-xl text-deep-sage">Sheet</h3>
                       <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="outline">Open Sheet</Button>
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <SheetTitle>Edit profile</SheetTitle>
                              <SheetDescription>
                                Make changes to your profile here. Click save when you're done.
                              </SheetDescription>
                            </SheetHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">Name</Label>
                                <Input id="name" value="Pedro Duarte" className="col-span-3" />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button type="submit">Save changes</Button>
                            </DialogFooter>
                          </SheetContent>
                        </Sheet>
                    </div>

                    <div className="p-8 bg-white rounded-xl border border-border space-y-6">
                       <h3 className="font-bold text-xl text-deep-sage">Popups</h3>
                       <div className="flex gap-4">
                         <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline">Popover</Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                              <div className="grid gap-4">
                                <div className="space-y-2">
                                  <h4 className="font-medium leading-none">Dimensions</h4>
                                  <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon"><Info className="h-5 w-5" /></Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Add to library</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                       </div>
                    </div>
                 </div>
              </TabsContent>

              {/* Data Tab */}
              <TabsContent value="data" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="p-8 bg-white rounded-xl border border-border space-y-6">
                      <h3 className="font-bold text-xl text-deep-sage">Table</h3>
                      <Table>
                        <TableCaption>A list of recent invoices.</TableCaption>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">INV002</TableCell>
                            <TableCell>Pending</TableCell>
                            <TableCell>PayPal</TableCell>
                            <TableCell className="text-right">$150.00</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                   </div>

                   <div className="p-8 bg-white rounded-xl border border-border space-y-6">
                      <h3 className="font-bold text-xl text-deep-sage">Accordion</h3>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Is it accessible?</AccordionTrigger>
                          <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger>Is it styled?</AccordionTrigger>
                          <AccordionContent>
                            Yes. It comes with default styles that matches the other components' aesthetic.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                   </div>

                   <div className="p-8 bg-white rounded-xl border border-border space-y-6 col-span-1 md:col-span-2">
                      <h3 className="font-bold text-xl text-deep-sage">Navigation & Misc</h3>
                      <div className="flex flex-wrap gap-8 items-center">
                         <Breadcrumb>
                            <BreadcrumbList>
                              <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbSeparator />
                              <BreadcrumbItem>
                                <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbSeparator />
                              <BreadcrumbItem>
                                <BreadcrumbPage>Components</BreadcrumbPage>
                              </BreadcrumbItem>
                            </BreadcrumbList>
                          </Breadcrumb>

                          <div className="flex gap-4">
                             <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                             </Avatar>
                             <Avatar>
                                <AvatarFallback>BP</AvatarFallback>
                             </Avatar>
                          </div>

                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="outline">Open Menu</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                              <DropdownMenuLabel>My Account</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <CreditCard className="mr-2 h-4 w-4" />
                                <span>Billing</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>

                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <Button variant="link">@nextjs</Button>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                              <div className="flex justify-between space-x-4">
                                <Avatar>
                                  <AvatarImage src="https://github.com/vercel.png" />
                                  <AvatarFallback>VC</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1">
                                  <h4 className="text-sm font-semibold">@nextjs</h4>
                                  <p className="text-sm">
                                    The React Framework – created and maintained by @vercel.
                                  </p>
                                  <div className="flex items-center pt-2">
                                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                                    <span className="text-xs text-muted-foreground">
                                      Joined December 2021
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                      </div>
                   </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </section>

      </div>
    </div>
  );
}

function ColorCard({ name, hex, className }: { name: string, hex: string, className: string }) {
  return (
    <div className={`p-6 rounded-lg shadow-sm flex flex-col justify-between h-32 transition-transform hover:scale-105 ${className}`}>
      <span className="font-bold font-heading text-lg">{name}</span>
      <div className="flex justify-between items-end">
        <span className="text-sm opacity-80 font-mono bg-black/10 px-2 py-1 rounded">{hex}</span>
      </div>
    </div>
  );
}

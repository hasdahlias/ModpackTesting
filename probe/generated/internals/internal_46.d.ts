/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class UserWhiteList extends Internal.StoredUserList<Internal.GameProfile, any> {
        constructor(arg0: Internal.File_)
        isWhiteListed(arg0: Internal.GameProfile_): boolean;
        getKeyForUser(arg0: Internal.GameProfile_): string;
        createEntry(arg0: Internal.JsonObject_): Internal.StoredUserEntry<Internal.GameProfile>;
    }
    type UserWhiteList_ = UserWhiteList;
    interface Position {
        abstract z(): number;
        abstract y(): number;
        abstract x(): number;
    }
    type Position_ = Position;
    class CaxtonFont implements Internal.AutoCloseable {
        constructor(input: Internal.InputStream_, id: ResourceLocation_, options: Internal.JsonObject_)
        getBbox(glyphId: number): number;
        getPixelData(mipmap: number): number;
        getOptions(): Internal.CaxtonFontOptions;
        getFontPtr(): number;
        getTlistSize(): number;
        getGlyphsByWidth(): Internal.Int2ObjectMap<Internal.IntList>;
        getMetrics(i: number): number;
        supportsCodePoint(codePoint: number): boolean;
        getTlistLocation(glyphId: number, mipmap: number): number;
        getPixelFormat(): Internal.NativeImage$Format;
        getId(): ResourceLocation;
        getNumMipmapLevels(): number;
        getGlyphName(id: number): string;
        close(): void;
        cloneReference(): this;
        shapeForDebug(s: string): Internal.DebugShapeInfo;
        getGlyphCount(): number;
        get options(): Internal.CaxtonFontOptions
        get fontPtr(): number
        get tlistSize(): number
        get glyphsByWidth(): Internal.Int2ObjectMap<Internal.IntList>
        get pixelFormat(): Internal.NativeImage$Format
        get id(): ResourceLocation
        get numMipmapLevels(): number
        get glyphCount(): number
    }
    type CaxtonFont_ = CaxtonFont;
    class FluidPredicate {
        constructor(arg0: Internal.TagKey_<Internal.Fluid>, arg1: Internal.Fluid_, arg2: Internal.StatePropertiesPredicate_)
        serializeToJson(): Internal.JsonElement;
        matches(arg0: Internal.ServerLevel_, arg1: BlockPos_): boolean;
        static fromJson(arg0: Internal.JsonElement_): Internal.FluidPredicate;
        static readonly ANY: Internal.FluidPredicate;
    }
    type FluidPredicate_ = FluidPredicate;
    class OptionalInt {
        static of(arg0: number): Internal.OptionalInt;
        static empty(): Internal.OptionalInt;
        getAsInt(): number;
        isPresent(): boolean;
        orElseThrow(): number;
        ifPresentOrElse(arg0: Internal.IntConsumer_, arg1: Internal.Runnable_): void;
        orElseGet(arg0: Internal.IntSupplier_): number;
        isEmpty(): boolean;
        orElseThrow<X extends Internal.Throwable>(arg0: Internal.Supplier_<X>): number;
        stream(): Internal.IntStream;
        ifPresent(arg0: Internal.IntConsumer_): void;
        orElse(arg0: number): number;
        get asInt(): number
        get present(): boolean
        get empty(): boolean
    }
    type OptionalInt_ = OptionalInt;
    interface IRecipeSlotView {
        getDisplayedIngredient<T>(arg0: Internal.IIngredientType_<T>): Internal.Optional<T>;
        abstract getSlotName(): Internal.Optional<string>;
        abstract getDisplayedIngredient(): Internal.Optional<Internal.ITypedIngredient<any>>;
        getIngredients<T>(arg0: Internal.IIngredientType_<T>): Internal.Stream<T>;
        abstract drawHighlight(arg0: Internal.GuiGraphics_, arg1: number): void;
        getItemStacks(): Internal.Stream<Internal.ItemStack>;
        isEmpty(): boolean;
        abstract getAllIngredients(): Internal.Stream<Internal.ITypedIngredient<any>>;
        abstract getRole(): Internal.RecipeIngredientRole;
        getDisplayedItemStack(): Internal.Optional<Internal.ItemStack>;
        get slotName(): Internal.Optional<string>
        get displayedIngredient(): Internal.Optional<Internal.ITypedIngredient<any>>
        get itemStacks(): Internal.Stream<Internal.ItemStack>
        get empty(): boolean
        get allIngredients(): Internal.Stream<Internal.ITypedIngredient<any>>
        get role(): Internal.RecipeIngredientRole
        get displayedItemStack(): Internal.Optional<Internal.ItemStack>
    }
    type IRecipeSlotView_ = IRecipeSlotView;
    interface LongListIterator extends Internal.LongBidirectionalIterator, Internal.ListIterator<number> {
        /**
         * @deprecated
        */
        add(arg0: any): void;
        abstract nextIndex(): number;
        forEachRemaining(arg0: any): void;
        /**
         * @deprecated
        */
        next(): any;
        /**
         * @deprecated
        */
        set(arg0: any): void;
        skip(arg0: number): number;
        abstract nextLong(): number;
        forEachRemaining(arg0: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        remove(): void;
        abstract hasPrevious(): boolean;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        add(arg0: number): void;
        set(arg0: number): void;
        /**
         * @deprecated
        */
        add(arg0: number): void;
        abstract previousLong(): number;
        back(arg0: number): number;
        abstract hasNext(): boolean;
        /**
         * @deprecated
        */
        set(arg0: number): void;
        /**
         * @deprecated
        */
        previous(): any;
        abstract previousIndex(): number;
        forEachRemaining(arg0: Internal.LongConsumer_): void;
    }
    type LongListIterator_ = LongListIterator;
    class DensityFunctions$Ap2 extends Internal.Record implements Internal.DensityFunctions$TwoArgumentSimpleFunction {
        constructor(arg0: Internal.DensityFunctions$TwoArgumentSimpleFunction$Type_, arg1: Internal.DensityFunction_, arg2: Internal.DensityFunction_, arg3: number, arg4: number)
        abs(): Internal.DensityFunction;
        halfNegative(): Internal.DensityFunction;
        maxValue(): number;
        codec(): Internal.KeyDispatchDataCodec<Internal.DensityFunction>;
        compute(arg0: Internal.DensityFunction$FunctionContext_): number;
        squeeze(): Internal.DensityFunction;
        square(): Internal.DensityFunction;
        mapAll(arg0: Internal.DensityFunction$Visitor_): Internal.DensityFunction;
        static create(arg0: Internal.DensityFunctions$TwoArgumentSimpleFunction$Type_, arg1: Internal.DensityFunction_, arg2: Internal.DensityFunction_): Internal.DensityFunctions$TwoArgumentSimpleFunction;
        clamp(arg0: number, arg1: number): Internal.DensityFunction;
        type(): Internal.DensityFunctions$TwoArgumentSimpleFunction$Type;
        argument1(): Internal.DensityFunction;
        quarterNegative(): Internal.DensityFunction;
        cube(): Internal.DensityFunction;
        fillArray(arg0: number[], arg1: Internal.DensityFunction$ContextProvider_): void;
        minValue(): number;
        argument2(): Internal.DensityFunction;
    }
    type DensityFunctions$Ap2_ = DensityFunctions$Ap2;
    interface SpriteContentsTickerAccessor {
        abstract getAnimationInfo(): Internal.SpriteContents$AnimatedTexture;
        abstract setFrame(arg0: number): void;
        abstract setSubFrame(arg0: number): void;
        abstract getSubFrame(): number;
        abstract getFrame(): number;
        get animationInfo(): Internal.SpriteContents$AnimatedTexture
        set frame(arg0: number)
        set subFrame(arg0: number)
        get subFrame(): number
        get frame(): number
    }
    type SpriteContentsTickerAccessor_ = SpriteContentsTickerAccessor;
    class NoteBlockInstrument extends Internal.Enum<Internal.NoteBlockInstrument> implements Internal.StringRepresentable {
        isTunable(): boolean;
        static values(): Internal.NoteBlockInstrument[];
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.NoteBlockInstrument;
        hasCustomSound(): boolean;
        static newInstrument$cataclysm_$md$2a2e30$0(arg0: string, arg1: number, arg2: string, arg3: Internal.Holder_<any>, arg4: Internal.NoteBlockInstrument$Type_): Internal.NoteBlockInstrument;
        worksAboveNoteBlock(): boolean;
        getSoundEvent(): Internal.Holder<Internal.SoundEvent>;
        get tunable(): boolean
        get serializedName(): string
        get soundEvent(): Internal.Holder<Internal.SoundEvent>
        static readonly XYLOPHONE: Internal.NoteBlockInstrument;
        static readonly COW_BELL: Internal.NoteBlockInstrument;
        static readonly WITHER_SKELETON: Internal.NoteBlockInstrument;
        static readonly HAT: Internal.NoteBlockInstrument;
        static readonly GUITAR: Internal.NoteBlockInstrument;
        static readonly DRAGON: Internal.NoteBlockInstrument;
        static readonly CUSTOM_HEAD: Internal.NoteBlockInstrument;
        static readonly CREEPER: Internal.NoteBlockInstrument;
        static readonly PLING: Internal.NoteBlockInstrument;
        static readonly SKELETON: Internal.NoteBlockInstrument;
        static readonly PIGLIN: Internal.NoteBlockInstrument;
        static readonly FLUTE: Internal.NoteBlockInstrument;
        static readonly CHIME: Internal.NoteBlockInstrument;
        static readonly BIT: Internal.NoteBlockInstrument;
        static readonly SNARE: Internal.NoteBlockInstrument;
        static readonly BANJO: Internal.NoteBlockInstrument;
        static readonly IRON_XYLOPHONE: Internal.NoteBlockInstrument;
        static readonly ZOMBIE: Internal.NoteBlockInstrument;
        static readonly BASEDRUM: Internal.NoteBlockInstrument;
        static readonly BASS: Internal.NoteBlockInstrument;
        static readonly DIDGERIDOO: Internal.NoteBlockInstrument;
        static readonly HARP: Internal.NoteBlockInstrument;
        static readonly BELL: Internal.NoteBlockInstrument;
    }
    type NoteBlockInstrument_ = "bell" | "harp" | "snare" | "hat" | NoteBlockInstrument | "pling" | "wither_skeleton" | "skeleton" | "aptrgangr" | "bass" | "custom_head" | "guitar" | "creeper" | "kobolediator" | "bit" | "xylophone" | "draugr" | "zombie" | "iron_xylophone" | "didgeridoo" | "chime" | "banjo" | "dragon" | "basedrum" | "flute" | "piglin" | "cow_bell";
    class ProjectileImpactEvent$ImpactResult extends Internal.Enum<Internal.ProjectileImpactEvent$ImpactResult> {
        static values(): Internal.ProjectileImpactEvent$ImpactResult[];
        static valueOf(arg0: string): Internal.ProjectileImpactEvent$ImpactResult;
        static readonly STOP_AT_CURRENT: Internal.ProjectileImpactEvent$ImpactResult;
        static readonly STOP_AT_CURRENT_NO_DAMAGE: Internal.ProjectileImpactEvent$ImpactResult;
        static readonly DEFAULT: Internal.ProjectileImpactEvent$ImpactResult;
        static readonly SKIP_ENTITY: Internal.ProjectileImpactEvent$ImpactResult;
    }
    type ProjectileImpactEvent$ImpactResult_ = ProjectileImpactEvent$ImpactResult | "stop_at_current" | "stop_at_current_no_damage" | "skip_entity" | "default";
    class ForgeFlowingFluid$Flowing extends Internal.ForgeFlowingFluid {
        constructor(arg0: any_)
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        getExplosionResistance(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        arch$holder(): Internal.Holder<Internal.Fluid>;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        arch$registryName(): ResourceLocation;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
    }
    type ForgeFlowingFluid$Flowing_ = ForgeFlowingFluid$Flowing;
    class ZoneOffsetTransitionRule$TimeDefinition extends Internal.Enum<Internal.ZoneOffsetTransitionRule$TimeDefinition> {
        static valueOf(arg0: string): Internal.ZoneOffsetTransitionRule$TimeDefinition;
        createDateTime(arg0: Internal.LocalDateTime_, arg1: Internal.ZoneOffset_, arg2: Internal.ZoneOffset_): Internal.LocalDateTime;
        static values(): Internal.ZoneOffsetTransitionRule$TimeDefinition[];
        static readonly UTC: Internal.ZoneOffsetTransitionRule$TimeDefinition;
        static readonly WALL: Internal.ZoneOffsetTransitionRule$TimeDefinition;
        static readonly STANDARD: Internal.ZoneOffsetTransitionRule$TimeDefinition;
    }
    type ZoneOffsetTransitionRule$TimeDefinition_ = "standard" | ZoneOffsetTransitionRule$TimeDefinition | "utc" | "wall";
    class RootPlacerType <P extends Internal.RootPlacer> {
        constructor(arg0: Internal.Codec_<P>)
        codec(): Internal.Codec<P>;
        static readonly MANGROVE_ROOT_PLACER: Internal.RootPlacerType<Internal.MangroveRootPlacer>;
    }
    type RootPlacerType_<P extends Internal.RootPlacer> = RootPlacerType<P> | Special.RootPlacerType;
    class ItemModelPropertiesEventJS extends Internal.StartupEventJS {
        constructor()
        /**
         * Register a model property for an item. Model properties are used to change the appearance of an item in the world.
         * 
         * More about model properties: https://minecraft.fandom.com/wiki/Model#Item_predicates
        */
        register(ingredient: Internal.Ingredient_, overwriteId: string, callback: Internal.ClampedItemPropertyFunction_): void;
        /**
         * Register a model property for all items.
        */
        registerAll(overwriteId: string, callback: Internal.ClampedItemPropertyFunction_): void;
    }
    type ItemModelPropertiesEventJS_ = ItemModelPropertiesEventJS;
    class PortalInfo {
        constructor(arg0: Vec3d_, arg1: Vec3d_, arg2: number, arg3: number)
        readonly pos: Vec3d;
        readonly speed: Vec3d;
        readonly yRot: number;
        readonly xRot: number;
    }
    type PortalInfo_ = PortalInfo;
    class PlayerStatueBlockItem extends Internal.BlockItem {
        constructor()
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vector3f;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setArmorToughness(armorToughness: number): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type PlayerStatueBlockItem_ = PlayerStatueBlockItem;
    interface LivingEntityAccess {
        abstract getBlockedCooldown(): number;
        abstract getLastShield(): Internal.ItemStack;
        abstract getUsedStamina(): number;
        abstract getBlocking(): boolean;
        abstract setBlockedCooldown(arg0: number): void;
        abstract setLastShield(arg0: Internal.ItemStack_): void;
        abstract getParryWindow(): number;
        abstract setParryWindow(arg0: number): void;
        abstract setBlocking(arg0: boolean): void;
        get(arg0: any): this;
        abstract setUsedStamina(arg0: number): void;
        get blockedCooldown(): number
        get lastShield(): Internal.ItemStack
        get usedStamina(): number
        get blocking(): boolean
        set blockedCooldown(arg0: number)
        set lastShield(arg0: Internal.ItemStack_)
        get parryWindow(): number
        set parryWindow(arg0: number)
        set blocking(arg0: boolean)
        set usedStamina(arg0: number)
    }
    type LivingEntityAccess_ = LivingEntityAccess;
    class Door_of_Seal_Block$Door_Of_Seal_Part extends Internal.Enum<Internal.Door_of_Seal_Block$Door_Of_Seal_Part> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static values(): Internal.Door_of_Seal_Block$Door_Of_Seal_Part[];
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.Door_of_Seal_Block$Door_Of_Seal_Part;
        get serializedName(): string
        static readonly CENTER: Internal.Door_of_Seal_Block$Door_Of_Seal_Part;
        static readonly SIDE_RIGHT: Internal.Door_of_Seal_Block$Door_Of_Seal_Part;
        static readonly END_LEFT: Internal.Door_of_Seal_Block$Door_Of_Seal_Part;
        static readonly END_RIGHT: Internal.Door_of_Seal_Block$Door_Of_Seal_Part;
        static readonly SIDE_LEFT: Internal.Door_of_Seal_Block$Door_Of_Seal_Part;
    }
    type Door_of_Seal_Block$Door_Of_Seal_Part_ = "side_left" | "center" | "side_right" | "end_left" | "end_right" | Door_of_Seal_Block$Door_Of_Seal_Part;
    abstract class Editor extends WidgetGroup implements Internal.ILDLRegister {
        constructor(workSpace: Internal.File_)
        constructor(modID: string)
        getTabPages(): Internal.StringTabContainer;
        addRawHistory(name: string, date: Internal.CompoundTag_, source: any): void;
        getTranslateKey(): string;
        static deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): void;
        getMenuPanel(): Internal.MenuPanel;
        askToSaveProject(result: Internal.BooleanConsumer_): void;
        setCopy(copyType: string, copied: any): void;
        ifCopiedPresent(copyType: string, consumer: Internal.Consumer_<any>): void;
        handleDragging(dragging: any): boolean;
        saveProject(result: Internal.BooleanConsumer_): void;
        getCurrentProject(): Internal.IProject;
        getResourcePanel(): Internal.ResourcePanel;
        initEditorViews(): void;
        getToolPanel(): Internal.ToolPanel;
        getChatComponent(): Internal.Component;
        getCopyType(): string;
        static deserializeWrapper(tag: Internal.CompoundTag_): Internal.IConfigurableWidget;
        getFloatView(): WidgetGroup;
        getWorkSpace(): Internal.File;
        isLDLRegister(): boolean;
        isWaitingForSave(): boolean;
        serializeWrapper(): Internal.CompoundTag;
        getCurrentHistory(): Internal.Editor$HistoryItem;
        canDragIn(dragging: any): boolean;
        getCopied(): any;
        setClientSideWidget(): Widget;
        static serializeNBT(widget: Internal.IConfigurableWidget_, resources: Internal.Resources_, isProject: boolean): Internal.CompoundTag;
        saveAsProject(result: Internal.BooleanConsumer_): void;
        isCurrentProjectSaved(): boolean;
        widget(): Widget;
        name(): string;
        static serializeNBT(widget: Internal.IConfigurableWidget_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): Internal.CompoundTag;
        addRawHistory(name: string, date: Internal.CompoundTag_): void;
        jumpToHistory(historyItem: Internal.Editor$HistoryItem_): void;
        getHistory(): Internal.List<Internal.Editor$HistoryItem>;
        getConfigPanel(): Internal.ConfigPanel;
        getRegisterUI(): Internal.LDLRegister;
        setCurrentProjectFile(currentProjectFile: Internal.File_): void;
        addAutoHistory(name: string, source: any): void;
        openMenu<T, C>(posX: number, posY: number, menuNode: Internal.TreeNode_<T, C>): Internal.MenuWidget<T, C>;
        group(): string;
        static deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: Internal.Resources_, isProject: boolean): void;
        loadProject(project: Internal.IProject_): void;
        openMenu(posX: number, posY: number, menuBuilder: Internal.TreeBuilder$Menu_): void;
        openDialog(dialog: DialogWidget_): DialogWidget;
        getCurrentProjectFile(): Internal.File;
        get tabPages(): Internal.StringTabContainer
        get translateKey(): string
        get menuPanel(): Internal.MenuPanel
        get currentProject(): Internal.IProject
        get resourcePanel(): Internal.ResourcePanel
        get toolPanel(): Internal.ToolPanel
        get chatComponent(): Internal.Component
        get copyType(): string
        get floatView(): WidgetGroup
        get workSpace(): Internal.File
        get LDLRegister(): boolean
        get waitingForSave(): boolean
        get currentHistory(): Internal.Editor$HistoryItem
        get copied(): any
        get currentProjectSaved(): boolean
        get history(): Internal.List<Internal.Editor$HistoryItem>
        get configPanel(): Internal.ConfigPanel
        get registerUI(): Internal.LDLRegister
        set currentProjectFile(currentProjectFile: Internal.File_)
        get currentProjectFile(): Internal.File
        static INSTANCE: Internal.Editor;
    }
    type Editor_ = Editor;
    abstract class Feature <FC extends Internal.FeatureConfiguration> {
        constructor(arg0: Internal.Codec_<FC>)
        static isStone(arg0: Internal.BlockState_): boolean;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        place(arg0: FC, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        abstract place(arg0: Internal.FeaturePlaceContext_<FC>): boolean;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        static isDirt(arg0: Internal.BlockState_): boolean;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<FC, Internal.Feature<FC>>>;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        static readonly FREEZE_TOP_LAYER: Internal.SnowAndFreezeFeature;
        static readonly BLOCK_COLUMN: Internal.BlockColumnFeature;
        static readonly DRIPSTONE_CLUSTER: Internal.DripstoneClusterFeature;
        static readonly RANDOM_BOOLEAN_SELECTOR: Internal.RandomBooleanSelectorFeature;
        static readonly FOSSIL: Internal.FossilFeature;
        static readonly TREE: Internal.TreeFeature;
        static readonly HUGE_FUNGUS: Internal.HugeFungusFeature;
        static readonly RANDOM_PATCH: Internal.RandomPatchFeature;
        static readonly DISK: Internal.DiskFeature;
        static readonly ICEBERG: Internal.IcebergFeature;
        static readonly BASALT_PILLAR: Internal.BasaltPillarFeature;
        static readonly WATERLOGGED_VEGETATION_PATCH: Internal.WaterloggedVegetationPatchFeature;
        static readonly CORAL_CLAW: Internal.CoralClawFeature;
        static readonly END_ISLAND: Internal.EndIslandFeature;
        static readonly MULTIFACE_GROWTH: Internal.MultifaceGrowthFeature;
        static readonly GLOWSTONE_BLOB: Internal.GlowstoneFeature;
        static readonly BASALT_COLUMNS: Internal.BasaltColumnsFeature;
        static readonly NO_OP: Internal.NoOpFeature;
        static readonly SIMPLE_RANDOM_SELECTOR: Internal.SimpleRandomSelectorFeature;
        static readonly GEODE: Internal.GeodeFeature;
        static readonly BLUE_ICE: Internal.BlueIceFeature;
        static readonly SCULK_PATCH: Internal.SculkPatchFeature;
        static readonly CORAL_TREE: Internal.CoralTreeFeature;
        static readonly SIMPLE_BLOCK: Internal.SimpleBlockFeature;
        static readonly NO_BONEMEAL_FLOWER: Internal.RandomPatchFeature;
        static readonly BAMBOO: Internal.BambooFeature;
        static readonly TWISTING_VINES: Internal.TwistingVinesFeature;
        static readonly SCATTERED_ORE: Internal.ScatteredOreFeature;
        static readonly NETHER_FOREST_VEGETATION: Internal.NetherForestVegetationFeature;
        static readonly BONUS_CHEST: Internal.BonusChestFeature;
        static readonly POINTED_DRIPSTONE: Internal.PointedDripstoneFeature;
        static readonly ICE_SPIKE: Internal.IceSpikeFeature;
        static readonly SEA_PICKLE: Internal.SeaPickleFeature;
        static readonly REPLACE_BLOBS: Internal.ReplaceBlobsFeature;
        static readonly VINES: Internal.VinesFeature;
        static readonly VOID_START_PLATFORM: Internal.VoidStartPlatformFeature;
        static readonly LAKE: Internal.LakeFeature;
        static readonly ROOT_SYSTEM: Internal.RootSystemFeature;
        static readonly FLOWER: Internal.RandomPatchFeature;
        static readonly LARGE_DRIPSTONE: Internal.LargeDripstoneFeature;
        static readonly RANDOM_SELECTOR: Internal.RandomSelectorFeature;
        static readonly BLOCK_PILE: Internal.BlockPileFeature;
        static readonly REPLACE_SINGLE_BLOCK: Internal.ReplaceBlockFeature;
        static readonly ORE: Internal.OreFeature;
        static readonly SEAGRASS: Internal.SeagrassFeature;
        static readonly WEEPING_VINES: Internal.WeepingVinesFeature;
        static readonly SPRING: Internal.SpringFeature;
        static readonly UNDERWATER_MAGMA: Internal.UnderwaterMagmaFeature;
        static readonly END_SPIKE: Internal.SpikeFeature;
        static readonly DELTA_FEATURE: Internal.DeltaFeature;
        static readonly FILL_LAYER: Internal.FillLayerFeature;
        static readonly HUGE_RED_MUSHROOM: Internal.HugeRedMushroomFeature;
        static readonly CHORUS_PLANT: Internal.ChorusPlantFeature;
        static readonly MONSTER_ROOM: Internal.MonsterRoomFeature;
        static readonly FOREST_ROCK: Internal.BlockBlobFeature;
        static readonly KELP: Internal.KelpFeature;
        static readonly HUGE_BROWN_MUSHROOM: Internal.HugeBrownMushroomFeature;
        static readonly VEGETATION_PATCH: Internal.VegetationPatchFeature;
        static readonly END_GATEWAY: Internal.EndGatewayFeature;
        static readonly DESERT_WELL: Internal.DesertWellFeature;
        static readonly CORAL_MUSHROOM: Internal.CoralMushroomFeature;
    }
    type Feature_<FC extends Internal.FeatureConfiguration> = Special.Feature | Feature<FC>;
    class DNLButtonBlock extends Internal.ButtonBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.BlockSetType_, arg2: number, arg3: boolean)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type DNLButtonBlock_ = DNLButtonBlock;
    interface Enemy {
        readonly XP_REWARD_BOSS: 50;
        readonly XP_REWARD_MEDIUM: 5;
        readonly XP_REWARD_SMALL: 3;
        readonly XP_REWARD_HUGE: 20;
        readonly XP_REWARD_NONE: 0;
        readonly XP_REWARD_LARGE: 10;
    }
    type Enemy_ = Enemy;
    class StrippableLogBlock extends Internal.RotatedPillarBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type StrippableLogBlock_ = StrippableLogBlock;
    class BlockElement implements Internal.EpsilonizableBlockElement {
        constructor(arg0: Vector3f_, arg1: Vector3f_, arg2: Internal.Map_<Internal.Direction, Internal.BlockElementFace>, arg3: Internal.BlockElementRotation_, arg4: boolean, arg5: Internal.ForgeFaceData_)
        constructor(arg0: Vector3f_, arg1: Vector3f_, arg2: Internal.Map_<Internal.Direction, Internal.BlockElementFace>, arg3: Internal.BlockElementRotation_, arg4: boolean)
        getFaceData(): Internal.ForgeFaceData;
        uvsByFace(arg0: Internal.Direction_): number[];
        embeddium$epsilonize(): void;
        setFaceData(arg0: Internal.ForgeFaceData_): void;
        get faceData(): Internal.ForgeFaceData
        set faceData(arg0: Internal.ForgeFaceData_)
        readonly rotation: Internal.BlockElementRotation;
        readonly shade: boolean;
        readonly to: Vector3f;
        readonly faces: Internal.Map<Internal.Direction, Internal.BlockElementFace>;
        readonly from: Vector3f;
    }
    type BlockElement_ = BlockElement;
    interface Toast {
        slotCount(): number;
        getToken(): any;
        abstract render(arg0: Internal.GuiGraphics_, arg1: Internal.ToastComponent_, arg2: number): Internal.Toast$Visibility;
        width(): number;
        height(): number;
        get token(): any
        (arg0: Internal.GuiGraphics, arg1: Internal.ToastComponent, arg2: number): Internal.Toast$Visibility_;
        readonly TEXTURE: ResourceLocation;
        readonly SLOT_HEIGHT: 32;
        readonly NO_TOKEN: any;
    }
    type Toast_ = Toast;
    class The_Incinerator extends Internal.Item implements Internal.More_Tool_Attribute {
        constructor(arg0: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        setAttackSpeed(attackSpeed: number): void;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vector3f;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setArmorToughness(armorToughness: number): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type The_Incinerator_ = The_Incinerator;
    class NearestBedSensor extends Internal.Sensor<Internal.Mob> {
        constructor()
        doTick(arg0: Internal.ServerLevel_, arg1: Internal.Mob_): void;
    }
    type NearestBedSensor_ = NearestBedSensor;
    interface LoadingCache <K, V> extends com.google.common.base.Function<K, V>, Internal.Cache<K, V> {
        abstract asMap(): Internal.ConcurrentMap<K, V>;
        /**
         * @deprecated
        */
        abstract apply(arg0: K): V;
        abstract getAllPresent(arg0: Internal.Iterable_<any>): Internal.ImmutableMap<K, V>;
        abstract invalidateAll(arg0: Internal.Iterable_<any>): void;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<K, V>;
        abstract invalidateAll(): void;
        abstract getIfPresent(arg0: any): V;
        abstract stats(): Internal.CacheStats;
        abstract cleanUp(): void;
        abstract size(): number;
        abstract putAll(arg0: Internal.Map_<K, V>): void;
        abstract put(arg0: K, arg1: V): void;
        abstract getUnchecked(arg0: K): V;
        abstract get(arg0: K, arg1: Internal.Callable_<V>): V;
        abstract refresh(arg0: K): void;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, V>;
        abstract getAll(arg0: Internal.Iterable_<K>): Internal.ImmutableMap<K, V>;
        abstract get(arg0: K): V;
        abstract invalidate(arg0: any): void;
        abstract equals(arg0: any): boolean;
        identity<T>(): Internal.Function<T, T>;
    }
    type LoadingCache_<K, V> = LoadingCache<K, V>;
    class BeeDebugRenderer$BeeInfo {
        constructor(arg0: Internal.UUID_, arg1: number, arg2: Internal.Position_, arg3: net.minecraft.world.level.pathfinder.Path_, arg4: BlockPos_, arg5: BlockPos_, arg6: number)
        hasFlower(): boolean;
        getName(): string;
        getUuid(): Internal.UUID;
        hasHive(arg0: BlockPos_): boolean;
        get name(): string
        get uuid(): Internal.UUID
        readonly path: net.minecraft.world.level.pathfinder.Path;
        readonly blacklistedHives: Internal.Set<BlockPos>;
        readonly uuid: Internal.UUID;
        readonly id: number;
        readonly pos: Internal.Position;
        readonly flowerPos: BlockPos;
        readonly hivePos: BlockPos;
        readonly goals: Internal.List<string>;
        readonly travelTicks: number;
    }
    type BeeDebugRenderer$BeeInfo_ = BeeDebugRenderer$BeeInfo;
    /**
     * Invoked when a player's inventory changes.
    */
    class InventoryChangedEventJS extends Internal.PlayerEventJS {
        constructor(p: Player_, is: Internal.ItemStack_, s: number)
        /**
         * Gets the player that changed their inventory.
        */
        getEntity(): Internal.LivingEntity;
        /**
         * Gets the item that was changed.
        */
        getItem(): Internal.ItemStack;
        /**
         * Gets the slot that was changed.
        */
        getSlot(): number;
        /**
         * Gets the player that changed their inventory.
        */
        get entity(): Internal.LivingEntity
        /**
         * Gets the item that was changed.
        */
        get item(): Internal.ItemStack
        /**
         * Gets the slot that was changed.
        */
        get slot(): number
    }
    type InventoryChangedEventJS_ = InventoryChangedEventJS;
    class BannerPattern {
        constructor(arg0: string)
        getHashname(): string;
        static location(arg0: Internal.ResourceKey_<Internal.BannerPattern>, arg1: boolean): ResourceLocation;
        static byHash(arg0: string): Internal.Holder<Internal.BannerPattern>;
        get hashname(): string
        readonly hashname: string;
    }
    type BannerPattern_ = BannerPattern | Special.BannerPattern;
    class SecureRandom extends Internal.Random {
        constructor()
        constructor(arg0: number[])
        static getInstance(arg0: string, arg1: string): Internal.SecureRandom;
        static getInstance(arg0: string, arg1: Internal.SecureRandomParameters_, arg2: Internal.Provider_): Internal.SecureRandom;
        nextFloat(arg0: number): number;
        nextBytes(arg0: number[], arg1: Internal.SecureRandomParameters_): void;
        static getDefault(): Internal.RandomGenerator;
        static getInstance(arg0: string, arg1: Internal.Provider_): Internal.SecureRandom;
        getParameters(): Internal.SecureRandomParameters;
        nextLong(arg0: number, arg1: number): number;
        getAlgorithm(): string;
        static getInstanceStrong(): Internal.SecureRandom;
        nextDouble(arg0: number): number;
        nextLong(arg0: number): number;
        nextFloat(arg0: number, arg1: number): number;
        reseed(): void;
        static of(arg0: string): Internal.RandomGenerator;
        setSeed(arg0: number[]): void;
        generateSeed(arg0: number): number[];
        nextDouble(arg0: number, arg1: number): number;
        nextExponential(): number;
        nextInt(arg0: number, arg1: number): number;
        isDeprecated(): boolean;
        getProvider(): Internal.Provider;
        nextGaussian(arg0: number, arg1: number): number;
        static getSeed(arg0: number): number[];
        reseed(arg0: Internal.SecureRandomParameters_): void;
        static getInstance(arg0: string, arg1: Internal.SecureRandomParameters_): Internal.SecureRandom;
        static getInstance(arg0: string): Internal.SecureRandom;
        static getInstance(arg0: string, arg1: Internal.SecureRandomParameters_, arg2: string): Internal.SecureRandom;
        get "default"(): Internal.RandomGenerator
        get parameters(): Internal.SecureRandomParameters
        get algorithm(): string
        get instanceStrong(): Internal.SecureRandom
        set seed(arg0: number[])
        get deprecated(): boolean
        get provider(): Internal.Provider
    }
    type SecureRandom_ = SecureRandom;
    class FloatComparingBiomeCondition extends io.github.edwinmindcraft.apoli.api.power.factory.BiomeCondition<Internal.FloatComparisonConfiguration> {
        constructor(arg0: Internal.Function_<Internal.Holder<Internal.Biome>, number>)
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type FloatComparingBiomeCondition_ = FloatComparingBiomeCondition;
    class SoftFluid {
        static getRenderingData(useTexturesFrom: ResourceLocation_): Internal.Triplet<ResourceLocation, ResourceLocation, number>;
        isFood(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getForgeFluid(): Internal.Fluid;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        isEmpty(): boolean;
        getFlowingTexture(): ResourceLocation;
        getNbtKeyFromItem(): Internal.List<string>;
        getTintMethod(): Internal.SoftFluid$TintMethod;
        isColored(): boolean;
        isEnabled(): boolean;
        getLuminosity(): number;
        getEmissivity(): number;
        getVanillaFluid(): Internal.Fluid;
        getStillTexture(): ResourceLocation;
        getFilledContainer(emptyContainer: Internal.Item_): Internal.Optional<Internal.Item>;
        getEquivalentFluids(): Internal.List<Internal.Fluid>;
        getFoodProvider(): Internal.FoodProvider;
        getTintColor(): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        isEmptyFluid(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getTranslationKey(): string;
        static addFluidSpecificAttributes(builder: Internal.SoftFluid$Builder_, fluid: Internal.Fluid_): void;
        getContainerList(): Internal.FluidContainerList;
        getTranslatedName(): Internal.Component;
        getTextureOverride(): ResourceLocation;
        getAverageTextureTintColor(): number;
        isEquivalent(fluid: Internal.Fluid_): boolean;
        getEmptyContainer(filledContainer: Internal.Item_): Internal.Optional<Internal.Item>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getFromMod(): string;
        get food(): boolean
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get forgeFluid(): Internal.Fluid
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get empty(): boolean
        get flowingTexture(): ResourceLocation
        get nbtKeyFromItem(): Internal.List<string>
        get tintMethod(): Internal.SoftFluid$TintMethod
        get colored(): boolean
        get enabled(): boolean
        get luminosity(): number
        get emissivity(): number
        get vanillaFluid(): Internal.Fluid
        get stillTexture(): ResourceLocation
        get equivalentFluids(): Internal.List<Internal.Fluid>
        get foodProvider(): Internal.FoodProvider
        get tintColor(): number
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get emptyFluid(): boolean
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get translationKey(): string
        get containerList(): Internal.FluidContainerList
        get translatedName(): Internal.Component
        get textureOverride(): ResourceLocation
        get averageTextureTintColor(): number
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get fromMod(): string
        static readonly CODEC: Internal.Codec<Internal.SoftFluid>;
        static readonly BUCKET_COUNT: 4;
        static readonly COMPONENT_CODEC: Internal.Codec<Internal.Component>;
        readonly isGenerated: boolean;
        static readonly HOLDER_CODEC: Internal.Codec<Internal.Holder<Internal.SoftFluid>>;
        static readonly WATER_BUCKET_COUNT: 3;
        static readonly BOTTLE_COUNT: 1;
        static readonly BOWL_COUNT: 2;
    }
    type SoftFluid_ = Special.SoftFluids | SoftFluid;
    interface TickableSoundInstance extends Internal.SoundInstance {
        getAudioStream(loader: Internal.SoundBufferLibrary_, id: ResourceLocation_, repeatInstantly: boolean): Internal.CompletableFuture<Internal.AudioStream>;
        abstract getAttenuation(): Internal.SoundInstance$Attenuation;
        abstract isStopped(): boolean;
        abstract getLocation(): ResourceLocation;
        abstract getSource(): Internal.SoundSource;
        abstract resolve(arg0: Internal.SoundManager_): Internal.WeighedSoundEvents;
        canStartSilent(): boolean;
        getStream(soundBuffers: Internal.SoundBufferLibrary_, sound: Internal.Sound_, looping: boolean): Internal.CompletableFuture<any>;
        abstract tick(): void;
        abstract getDelay(): number;
        canPlaySound(): boolean;
        abstract getX(): number;
        abstract isLooping(): boolean;
        abstract getVolume(): number;
        abstract getY(): number;
        abstract getZ(): number;
        abstract getPitch(): number;
        abstract getSound(): Internal.Sound;
        abstract isRelative(): boolean;
        createUnseededRandom(): Internal.RandomSource;
        get attenuation(): Internal.SoundInstance$Attenuation
        get stopped(): boolean
        get location(): ResourceLocation
        get source(): Internal.SoundSource
        get delay(): number
        get x(): number
        get looping(): boolean
        get volume(): number
        get y(): number
        get z(): number
        get pitch(): number
        get sound(): Internal.Sound
        get relative(): boolean
    }
    type TickableSoundInstance_ = TickableSoundInstance;
    interface IGhostIngredientHandler <T extends Internal.Screen> {
        abstract getTargetsTyped<I>(arg0: T, arg1: Internal.ITypedIngredient_<I>, arg2: boolean): Internal.List<Internal.IGhostIngredientHandler$Target<I>>;
        shouldHighlightTargets(): boolean;
        abstract onComplete(): void;
    }
    type IGhostIngredientHandler_<T extends Internal.Screen> = IGhostIngredientHandler<T>;
    abstract class Executable extends Internal.AccessibleObject implements Internal.Member, Internal.GenericDeclaration {
        getAnnotatedExceptionTypes(): Internal.AnnotatedType[];
        getAnnotationsByType<T extends Internal.Annotation>(arg0: T): T[];
        isVarArgs(): boolean;
        getAnnotatedParameterTypes(): Internal.AnnotatedType[];
        getGenericParameterTypes(): Internal.Type[];
        getGenericExceptionTypes(): Internal.Type[];
        abstract getModifiers(): number;
        isSynthetic(): boolean;
        getAnnotation<T extends Internal.Annotation>(arg0: T): T;
        abstract getDeclaringClass(): typeof any;
        abstract getAnnotatedReturnType(): Internal.AnnotatedType;
        abstract getExceptionTypes(): typeof any[];
        abstract getParameterTypes(): typeof any[];
        abstract getParameterAnnotations(): Internal.Annotation[][];
        getParameters(): any[];
        abstract toGenericString(): string;
        abstract getName(): string;
        getParameterCount(): number;
        abstract getTypeParameters(): any[];
        getAnnotatedReceiverType(): Internal.AnnotatedType;
        get annotatedExceptionTypes(): Internal.AnnotatedType[]
        get varArgs(): boolean
        get annotatedParameterTypes(): Internal.AnnotatedType[]
        get genericParameterTypes(): Internal.Type[]
        get genericExceptionTypes(): Internal.Type[]
        get modifiers(): number
        get synthetic(): boolean
        get declaringClass(): typeof any
        get annotatedReturnType(): Internal.AnnotatedType
        get exceptionTypes(): typeof any[]
        get parameterTypes(): typeof any[]
        get parameterAnnotations(): Internal.Annotation[][]
        get parameters(): any[]
        get name(): string
        get parameterCount(): number
        get typeParameters(): any[]
        get annotatedReceiverType(): Internal.AnnotatedType
    }
    type Executable_ = Executable;
    class ConfiguredCaxtonFont extends Internal.Record implements Internal.AutoCloseable {
        constructor(font: Internal.CaxtonFont_, ptr: number, shadowOffset: number, computedScaleFactor: number, blur: boolean, shiftX: number, shiftY: number, slant: number)
        shiftY(): number;
        shape(s: string[], bidiRuns: number[]): Internal.ShapingResult[];
        computedScaleFactor(): number;
        blur(): boolean;
        slant(): number;
        ptr(): number;
        close(): void;
        shadowOffset(): number;
        static load(manager: Internal.ResourceManager_, settings: Internal.ConfiguredCaxtonFont$Loader_): Internal.ConfiguredCaxtonFont;
        getScale(): number;
        shiftX(): number;
        font(): Internal.CaxtonFont;
        get scale(): number
    }
    type ConfiguredCaxtonFont_ = ConfiguredCaxtonFont;
    class DataFetcher$Subscription {
        constructor(arg0: Internal.DataFetcher_)
        forceUpdate(): void;
        subscribe<T>(arg0: Internal.DataFetcher$Task_<T>, arg1: Internal.Consumer_<T>): void;
        reset(): void;
        tick(): void;
    }
    type DataFetcher$Subscription_ = DataFetcher$Subscription;
    class BiomeModificationImpl$ModifierRecord {
        apply(context: Internal.BiomeSelectionContext_, modificationContext: Internal.BiomeModificationContext_): void;
    }
    type BiomeModificationImpl$ModifierRecord_ = BiomeModificationImpl$ModifierRecord;
    class GlowItemFrame extends Internal.ItemFrame {
        constructor(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_)
        constructor(arg0: Internal.EntityType_<Internal.ItemFrame>, arg1: Internal.Level_)
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        getDistance(pos: BlockPos_): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        isAmbientCreature(): boolean;
        getStepHeight(): number;
        isMonster(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isOnScoreboardTeam(teamId: string): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        self(): Internal.Entity;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        getMotionY(): number;
        getName(): Internal.Component;
        setPosition(x: number, y: number, z: number): void;
        getPassengers(): Internal.EntityArrayList;
        runCommandSilent(command: string): number;
        isPlayer(): boolean;
        isAnimal(): boolean;
        canStartSwimming(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        isLiving(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        alwaysAccepts(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        getDisplayName(): Internal.Component;
        setMotionX(x: number): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getScriptType(): Internal.ScriptType;
        getFacing(): Internal.Direction;
        canRiderInteract(): boolean;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        shouldRiderSit(): boolean;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getMotionX(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        isWaterCreature(): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getMotionZ(): number;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        tell(message: Internal.Component_): void;
        setZ(z: number): void;
        setStatusMessage(message: Internal.Component_): void;
        getDistanceSq(pos: BlockPos_): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        isFrame(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        playSound(id: Internal.SoundEvent_): void;
        getClassification(arg0: boolean): Internal.MobCategory;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        runCommand(command: string): number;
        getDistance(x: number, y: number, z: number): number;
        set motionY(y: number)
        get peacefulCreature(): boolean
        get ambientCreature(): boolean
        get stepHeight(): number
        get monster(): boolean
        get type(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get server(): Internal.MinecraftServer
        get displayName(): Internal.Component
        set motionX(x: number)
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get facing(): Internal.Direction
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get motionX(): number
        get waterCreature(): boolean
        get motionZ(): number
        get item(): Internal.ItemStack
        set x(x: number)
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get frame(): boolean
        get profile(): Internal.GameProfile
    }
    type GlowItemFrame_ = GlowItemFrame;
    interface IConfiguratorContainer {
        abstract computeLayout(): void;
        (): void;
    }
    type IConfiguratorContainer_ = IConfiguratorContainer;
    class SweetPuffFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type SweetPuffFeature_ = SweetPuffFeature;
    interface TelemetryProperty$Exporter <T> {
        abstract apply(arg0: Internal.TelemetryPropertyContainer_, arg1: string, arg2: T): void;
        (arg0: Internal.TelemetryPropertyContainer, arg1: string, arg2: T): void;
    }
    type TelemetryProperty$Exporter_<T> = TelemetryProperty$Exporter<T>;
    class HealthBoostMobEffect extends Internal.MobEffect {
        constructor(arg0: Internal.MobEffectCategory_, arg1: number)
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type HealthBoostMobEffect_ = HealthBoostMobEffect;
    interface Matrix3x2dc {
        abstract translate(arg0: number, arg1: number, arg2: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract normalizedPositiveY(arg0: Internal.Vector2d_): Internal.Vector2d;
        abstract get4x4(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract transformPosition(arg0: number, arg1: number, arg2: Internal.Vector2d_): Internal.Vector2d;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract viewArea(arg0: number[]): number[];
        abstract transformPosition(arg0: Internal.Vector2d_): Internal.Vector2d;
        abstract get(arg0: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract get3x3(arg0: number[]): number[];
        abstract transformDirection(arg0: number, arg1: number, arg2: Internal.Vector2d_): Internal.Vector2d;
        abstract m01(): number;
        abstract isFinite(): boolean;
        abstract getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract positiveY(arg0: Internal.Vector2d_): Internal.Vector2d;
        abstract transformDirection(arg0: Internal.Vector2d_): Internal.Vector2d;
        abstract m20(): number;
        abstract mulLocal(arg0: Internal.Matrix3x2dc_, arg1: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract get3x3(arg0: number[], arg1: number): number[];
        abstract testAar(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        abstract scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract rotateLocal(arg0: number, arg1: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract rotate(arg0: number, arg1: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract scaleAround(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract m10(): number;
        abstract transform(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract get3x3(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract translateLocal(arg0: number, arg1: number, arg2: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract scale(arg0: Internal.Vector2fc_, arg1: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract invert(arg0: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract transformPosition(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): Internal.Vector2d;
        abstract normalizedPositiveX(arg0: Internal.Vector2d_): Internal.Vector2d;
        abstract translate(arg0: Internal.Vector2dc_, arg1: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract rotateTo(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_, arg2: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract get(arg0: number[], arg1: number): number[];
        abstract get3x3(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract view(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract translateLocal(arg0: Internal.Vector2dc_, arg1: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract get4x4(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get3x3(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract m00(): number;
        abstract m21(): number;
        abstract positiveX(arg0: Internal.Vector2d_): Internal.Vector2d;
        abstract transformDirection(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): Internal.Vector2d;
        abstract testPoint(arg0: number, arg1: number): boolean;
        abstract scale(arg0: number, arg1: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract transform(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract scaleLocal(arg0: number, arg1: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract equals(arg0: Internal.Matrix3x2dc_, arg1: number): boolean;
        abstract get(arg0: number[]): number[];
        abstract getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract determinant(): number;
        abstract scale(arg0: number, arg1: number, arg2: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract get4x4(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get3x3(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract getToAddress(arg0: number): this;
        abstract testCircle(arg0: number, arg1: number, arg2: number): boolean;
        abstract rotateAbout(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract mul(arg0: Internal.Matrix3x2dc_, arg1: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract get4x4(arg0: number[], arg1: number): number[];
        abstract getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract scaleLocal(arg0: number, arg1: number, arg2: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract m11(): number;
        abstract get4x4(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract scale(arg0: Internal.Vector2dc_, arg1: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        abstract unproject(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector2d_): Internal.Vector2d;
        abstract unprojectInv(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector2d_): Internal.Vector2d;
        abstract origin(arg0: Internal.Vector2d_): Internal.Vector2d;
        abstract get4x4(arg0: number[]): number[];
        get finite(): boolean
    }
    type Matrix3x2dc_ = Matrix3x2dc;
    interface DensityFunctions$TwoArgumentSimpleFunction extends Internal.DensityFunction {
        abs(): Internal.DensityFunction;
        halfNegative(): Internal.DensityFunction;
        abstract maxValue(): number;
        codec(): Internal.KeyDispatchDataCodec<Internal.DensityFunction>;
        abstract compute(arg0: Internal.DensityFunction$FunctionContext_): number;
        squeeze(): Internal.DensityFunction;
        square(): Internal.DensityFunction;
        create(arg0: Internal.DensityFunctions$TwoArgumentSimpleFunction$Type_, arg1: Internal.DensityFunction_, arg2: Internal.DensityFunction_): this;
        abstract mapAll(arg0: Internal.DensityFunction$Visitor_): Internal.DensityFunction;
        clamp(arg0: number, arg1: number): Internal.DensityFunction;
        abstract type(): Internal.DensityFunctions$TwoArgumentSimpleFunction$Type;
        abstract argument1(): Internal.DensityFunction;
        quarterNegative(): Internal.DensityFunction;
        cube(): Internal.DensityFunction;
        abstract fillArray(arg0: number[], arg1: Internal.DensityFunction$ContextProvider_): void;
        abstract minValue(): number;
        abstract argument2(): Internal.DensityFunction;
        readonly LOGGER: Internal.Log4jLogger;
    }
    type DensityFunctions$TwoArgumentSimpleFunction_ = DensityFunctions$TwoArgumentSimpleFunction;
    class HugeFungusConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg5: boolean)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly stemState: Internal.BlockState;
        readonly validBaseState: Internal.BlockState;
        readonly hatState: Internal.BlockState;
        readonly planted: boolean;
        readonly decorState: Internal.BlockState;
        static readonly CODEC: Internal.Codec<Internal.HugeFungusConfiguration>;
        readonly replaceableBlocks: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
    }
    type HugeFungusConfiguration_ = HugeFungusConfiguration;
    class DamageEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, arg1: number, ...arg2: Internal.EquipmentSlot_[])
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        static readonly ARTHROPODS: 2;
        static readonly UNDEAD: 1;
        readonly type: number;
        static readonly ALL: 0;
    }
    type DamageEnchantment_ = DamageEnchantment;
    interface TriFunction <T, U, V, R> {
        andThen<W>(arg0: Internal.Function_<R, W>): Internal.TriFunction<T, U, V, W>;
        abstract apply(arg0: T, arg1: U, arg2: V): R;
        (arg0: T, arg1: U, arg2: V): R;
    }
    type TriFunction_<T, U, V, R> = TriFunction<T, U, V, R>;
    class MegaJungleTrunkPlacer extends Internal.GiantTrunkPlacer {
        constructor(arg0: number, arg1: number, arg2: number)
        static readonly CODEC: Internal.Codec<Internal.MegaJungleTrunkPlacer>;
    }
    type MegaJungleTrunkPlacer_ = MegaJungleTrunkPlacer;
    class FireChargeItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vector3f;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setArmorToughness(armorToughness: number): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type FireChargeItem_ = FireChargeItem;
    class VegetationPatchConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: Internal.TagKey_<Internal.Block>, arg1: Internal.BlockStateProvider_, arg2: Internal.Holder_<Internal.PlacedFeature>, arg3: Internal.CaveSurface_, arg4: Internal.IntProvider_, arg5: number, arg6: number, arg7: number, arg8: Internal.IntProvider_, arg9: number)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly replaceable: Internal.TagKey<Internal.Block>;
        static readonly CODEC: Internal.Codec<Internal.VegetationPatchConfiguration>;
        readonly vegetationFeature: Internal.Holder<Internal.PlacedFeature>;
        readonly groundState: Internal.BlockStateProvider;
        readonly extraBottomBlockChance: number;
        readonly verticalRange: number;
        readonly extraEdgeColumnChance: number;
        readonly xzRadius: Internal.IntProvider;
        readonly depth: Internal.IntProvider;
        readonly vegetationChance: number;
        readonly surface: Internal.CaveSurface;
    }
    type VegetationPatchConfiguration_ = VegetationPatchConfiguration;
    class SpellcasterIllager$IllagerSpell extends Internal.Enum<Internal.SpellcasterIllager$IllagerSpell> {
        static values(): Internal.SpellcasterIllager$IllagerSpell[];
        static byId(arg0: number): Internal.SpellcasterIllager$IllagerSpell;
        static valueOf(arg0: string): Internal.SpellcasterIllager$IllagerSpell;
        readonly id: number;
        static readonly FANGS: Internal.SpellcasterIllager$IllagerSpell;
        static readonly DISAPPEAR: Internal.SpellcasterIllager$IllagerSpell;
        static readonly SUMMON_VEX: Internal.SpellcasterIllager$IllagerSpell;
        static readonly NONE: Internal.SpellcasterIllager$IllagerSpell;
        static readonly WOLOLO: Internal.SpellcasterIllager$IllagerSpell;
        readonly spellColor: number[];
        static readonly BLINDNESS: Internal.SpellcasterIllager$IllagerSpell;
    }
    type SpellcasterIllager$IllagerSpell_ = SpellcasterIllager$IllagerSpell | "summon_vex" | "fangs" | "disappear" | "none" | "wololo" | "blindness";
    interface DyeableLeatherItem {
        setColor(arg0: Internal.ItemStack_, arg1: number): void;
        clearColor(arg0: Internal.ItemStack_): void;
        hasCustomColor(arg0: Internal.ItemStack_): boolean;
        getColor(arg0: Internal.ItemStack_): number;
        dyeArmor(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.DyeItem>): Internal.ItemStack;
        readonly DEFAULT_LEATHER_COLOR: 10511680;
        readonly TAG_DISPLAY: "display";
        readonly TAG_COLOR: "color";
    }
    type DyeableLeatherItem_ = DyeableLeatherItem;
    class FairkeeperChestBlockEntity extends Internal.RandomizableContainerBlockEntity implements Internal.MenuProvider {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        static tryClear(arg0: any): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        setCombatLootTable(arg0: Internal.FairkeeperChestBlockEntity_): Internal.CompoundTag;
        clear(ingredient: Internal.Ingredient_): void;
        getBoundaryAABB(): Internal.AABB;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        getSlots(): number;
        setChanged(): void;
        onLoad(): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        setDisabled(arg0: boolean): void;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): Internal.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_): boolean;
        hasCustomName(): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        static setMaxMinRegion(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FairkeeperChestBlockEntity_): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        fabric_onTransfer(slot: number, transaction: Internal.TransactionContext_): void;
        static serverTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FairkeeperChestBlockEntity_): void;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        isEmpty(): boolean;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        shouldCloseCurrentScreen(): boolean;
        serializeNBT(): Internal.Tag;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        deserializeNBT(arg0: Internal.Tag_): void;
        static scanFairkeeperChestPositions(arg0: Internal.Level_, arg1: BlockPos_, arg2: BlockPos_): boolean;
        getAllItems(): Internal.List<Internal.ItemStack>;
        getActualRegion1X(): number;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        static playSound(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.SoundEvent_): void;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        clear(): void;
        isDisabled(arg0: Internal.FairkeeperChestBlockEntity_): boolean;
        find(ingredient: Internal.Ingredient_): number;
        hasSpawnerLocations(): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getOpenProgress(arg0: number): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        hasLastSpawner(arg0: Internal.Level_, arg1: Internal.FairkeeperChestBlockEntity_): boolean;
        static clientTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FairkeeperChestBlockEntity_): void;
        set combatLootTable(arg0: Internal.FairkeeperChestBlockEntity_)
        get boundaryAABB(): Internal.AABB
        get slots(): number
        set disabled(arg0: boolean)
        get width(): number
        get maxStackSize(): number
        get renderBoundingBox(): Internal.AABB
        get empty(): boolean
        get height(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get actualRegion1X(): number
        get modelData(): Internal.ModelData
        get mutable(): boolean
        static readonly LOOT_TABLE_SEED_TAG: "LootTableSeed";
        static readonly LOOT_TABLE_TAG: "LootTable";
    }
    type FairkeeperChestBlockEntity_ = FairkeeperChestBlockEntity;
    abstract class DefaultedVertexConsumer implements Internal.VertexConsumer {
        constructor()
        uv2(arg0: number): Internal.VertexConsumer;
        abstract color(arg0: number, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        abstract endVertex(): void;
        color(arg0: number): Internal.VertexConsumer;
        abstract overlayCoords(arg0: number, arg1: number): Internal.VertexConsumer;
        applyBakedLighting(arg0: number, arg1: Internal.ByteBuffer_): number;
        abstract normal(arg0: number, arg1: number, arg2: number): Internal.VertexConsumer;
        misc(arg0: Internal.VertexFormatElement_, ...arg1: number[]): Internal.VertexConsumer;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        defaultColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
        abstract uv2(arg0: number, arg1: number): Internal.VertexConsumer;
        overlayCoords(arg0: number): Internal.VertexConsumer;
        normal(arg0: Matrix3f_, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        abstract vertex(arg0: number, arg1: number, arg2: number): Internal.VertexConsumer;
        applyBakedNormals(arg0: Vector3f_, arg1: Internal.ByteBuffer_, arg2: Matrix3f_): void;
        color(arg0: number, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        vertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number[], arg7: number, arg8: boolean): void;
        vertex(arg0: Matrix4f_, arg1: number, arg2: number, arg3: number): Internal.VertexConsumer;
        abstract uv(arg0: number, arg1: number): Internal.VertexConsumer;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        putBulkData(arg0: Internal.PoseStack$Pose_, arg1: Internal.BakedQuad_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        unsetDefaultColor(): void;
    }
    type DefaultedVertexConsumer_ = DefaultedVertexConsumer;
    interface EntityRendererProvider <T extends Internal.Entity> {
        abstract create(arg0: Internal.EntityRendererProvider$Context_): Internal.EntityRenderer<T>;
        (arg0: Internal.EntityRendererProvider$Context): Internal.EntityRenderer_<T>;
    }
    type EntityRendererProvider_<T extends Internal.Entity> = EntityRendererProvider<T>;
    class LivingEntityUseItemEvent$Start extends Internal.LivingEntityUseItemEvent {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_, arg2: number)
        getEntity(): Internal.Entity;
        get entity(): Internal.Entity
    }
    type LivingEntityUseItemEvent$Start_ = LivingEntityUseItemEvent$Start;
    class RandomBlockTickingRecipe$Serializer extends Internal.LycheeRecipe$Serializer<Internal.RandomBlockTickingRecipe> {
        constructor()
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        toNetwork0(arg0: Internal.FriendlyByteBuf_, arg1: Internal.RandomBlockTickingRecipe_): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.RandomBlockTickingRecipe;
        fromNetwork(arg0: Internal.RandomBlockTickingRecipe_, arg1: Internal.FriendlyByteBuf_): void;
        fromJson(arg0: Internal.RandomBlockTickingRecipe_, arg1: Internal.JsonObject_): void;
    }
    type RandomBlockTickingRecipe$Serializer_ = RandomBlockTickingRecipe$Serializer;
    abstract class InputEvent extends Internal.Event {
    }
    type InputEvent_ = InputEvent;
    class HolderBasedEntityCondition <T> extends Internal.EntityCondition<Internal.HolderConfiguration<T>> {
        constructor(arg0: Internal.MapCodec_<Internal.Holder<T>>, arg1: boolean, arg2: Internal.BiPredicate_<Internal.Entity, Internal.Holder<T>>)
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        static optional<T>(arg0: Internal.MapCodec_<Internal.Holder<T>>, arg1: Internal.BiPredicate_<Internal.Entity, Internal.Holder<T>>): Internal.HolderBasedEntityCondition<T>;
        check(arg0: Internal.HolderConfiguration_<T>, arg1: Internal.Entity_): boolean;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Entity_): boolean;
        static required<T>(arg0: Internal.MapCodec_<Internal.Holder<T>>, arg1: Internal.BiPredicate_<Internal.Entity, Internal.Holder<T>>): Internal.HolderBasedEntityCondition<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type HolderBasedEntityCondition_<T> = HolderBasedEntityCondition<T>;
    class MagmaCube extends Internal.Slime {
        constructor(arg0: Internal.EntityType_<Internal.MagmaCube>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        swing(): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        static checkMagmaCubeSpawnRules(arg0: Internal.EntityType_<Internal.MagmaCube>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAnimation(): Internal.AnimationApplier;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        canRiderInteract(): boolean;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_): void;
        shouldRiderSit(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getReachDistance(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isFrame(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        self(): Internal.LivingEntity;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getDefaultMovementSpeed(): number;
        swing(hand: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        isWeaponSwingInProgress(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        bettermobcombat$isCombatAnimationActive(): boolean;
        setZ(z: number): void;
        setStatusMessage(message: Internal.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        gatherDamagePowers(arg0: Internal.Entity_, arg1: DamageSource_, arg2: number): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get animation(): Internal.AnimationApplier
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get potionEffects(): Internal.EntityPotionEffectsJS
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get undead(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get weaponSwingInProgress(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get feetArmorItem(): Internal.ItemStack
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
    }
    type MagmaCube_ = MagmaCube;
    class SpellModificationBuilder$ModifiedClientPreCastCallback extends Internal.Record {
        constructor(getLevel: Internal.Level_, getSpellLevel: number, getEntity: Internal.LivingEntity_, getHand: Internal.InteractionHand_, getPlayerMagicData: Internal.MagicData_)
        getLevel(): Internal.Level;
        getSpellLevel(): number;
        getEntity(): Internal.LivingEntity;
        getHand(): Internal.InteractionHand;
        getPlayerMagicData(): Internal.MagicData;
        get level(): Internal.Level
        get spellLevel(): number
        get entity(): Internal.LivingEntity
        get hand(): Internal.InteractionHand
        get playerMagicData(): Internal.MagicData
    }
    type SpellModificationBuilder$ModifiedClientPreCastCallback_ = SpellModificationBuilder$ModifiedClientPreCastCallback;
    class ServerboundContainerButtonClickPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: number, arg1: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getButtonId(): number;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getContainerId(): number;
        isSkippable(): boolean;
        get buttonId(): number
        get containerId(): number
        get skippable(): boolean
    }
    type ServerboundContainerButtonClickPacket_ = ServerboundContainerButtonClickPacket;
    class StructurePieceSerializationContext extends Internal.Record {
        constructor(arg0: Internal.ResourceManager_, arg1: Internal.RegistryAccess_, arg2: Internal.StructureTemplateManager_)
        static fromLevel(arg0: Internal.ServerLevel_): Internal.StructurePieceSerializationContext;
        resourceManager(): Internal.ResourceManager;
        structureTemplateManager(): Internal.StructureTemplateManager;
        registryAccess(): Internal.RegistryAccess;
    }
    type StructurePieceSerializationContext_ = StructurePieceSerializationContext;
    class GeodeFeature extends Internal.Feature<Internal.GeodeConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.GeodeConfiguration>)
    }
    type GeodeFeature_ = GeodeFeature;
    interface BlockBehaviour$StatePredicate {
        abstract test(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        (arg0: Internal.BlockState, arg1: Internal.BlockGetter, arg2: BlockPos): boolean;
    }
    type BlockBehaviour$StatePredicate_ = BlockBehaviour$StatePredicate;
    class ServerboundRenameItemPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: string)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getName(): string;
        isSkippable(): boolean;
        get name(): string
        get skippable(): boolean
    }
    type ServerboundRenameItemPacket_ = ServerboundRenameItemPacket;
    interface MessageSizeEstimator$Handle {
        abstract size(arg0: any): number;
        (arg0: any): number;
    }
    type MessageSizeEstimator$Handle_ = MessageSizeEstimator$Handle;
    class Athame extends Internal.SwordItem {
        constructor(arg0: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vector3f;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setArmorToughness(armorToughness: number): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type Athame_ = Athame;
    interface ErrorReporter {
        abstract runtimeError(arg0: Internal.Context_, arg1: string, arg2: string, arg3: number, arg4: string, arg5: number): Internal.EvaluatorException;
        abstract error(arg0: Internal.Context_, arg1: string, arg2: string, arg3: number, arg4: string, arg5: number): void;
        abstract warning(arg0: string, arg1: string, arg2: number, arg3: string, arg4: number): void;
    }
    type ErrorReporter_ = ErrorReporter;
    class MegaJungleFoliagePlacer extends Internal.FoliagePlacer {
        constructor(arg0: Internal.IntProvider_, arg1: Internal.IntProvider_, arg2: number)
        readonly height: number;
        static readonly CODEC: Internal.Codec<Internal.MegaJungleFoliagePlacer>;
    }
    type MegaJungleFoliagePlacer_ = MegaJungleFoliagePlacer;
    class SelectorConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(selector: Internal.ArgumentWrapper_<Internal.EntitySelector>, biEntityAction: Internal.Holder_<Internal.ConfiguredBiEntityAction<any, any>>, biEntityCondition: Internal.Holder_<Internal.ConfiguredBiEntityCondition<any, any>>)
        biEntityCondition(): Internal.Holder<Internal.ConfiguredBiEntityCondition<any, any>>;
        isConfigurationValid(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        biEntityAction(): Internal.Holder<Internal.ConfiguredBiEntityAction<any, any>>;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        selector(): Internal.ArgumentWrapper<Internal.EntitySelector>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        getMissingBinds(): Internal.List<string>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.SelectorConfiguration>;
    }
    type SelectorConfiguration_ = SelectorConfiguration;
    class TripleBlockPart extends Internal.Enum<Internal.TripleBlockPart> implements Internal.StringRepresentable {
        static values(): Internal.TripleBlockPart[];
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.TripleBlockPart;
        get serializedName(): string
        static readonly MIDDLE: Internal.TripleBlockPart;
        static readonly BOTTOM: Internal.TripleBlockPart;
        static readonly TOP: Internal.TripleBlockPart;
    }
    type TripleBlockPart_ = "middle" | "bottom" | "top" | TripleBlockPart;
    class OrRecipeComponent <H, L> extends Internal.Record implements Internal.RecipeComponent<Internal.Either<H, L>> {
        constructor(high: Internal.RecipeComponent_<H>, low: Internal.RecipeComponent_<L>)
        replaceOutput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_, arg3: Internal.OutputReplacement_): any;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, Internal.Either<H, L>>>;
        high(): Internal.RecipeComponent<H>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        asArray(): Internal.ArrayRecipeComponent<Internal.Either<H, L>>;
        low(): Internal.RecipeComponent<L>;
        role(): Internal.ComponentRole;
        write(recipe: Internal.RecipeJS_, value: Internal.Either_<H, L>): Internal.JsonElement;
        componentClass(): typeof any;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<Internal.Either<H, L>, O>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<Internal.Either<H, L>>;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Either<H, L>>, json: Internal.JsonObject_): void;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, Internal.Either<H, L>>>;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Either<H, L>>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Either<H, L>>, map: Internal.Map_<any, any>): void;
        isOutput(recipe: Internal.RecipeJS_, value: Internal.Either_<H, L>, match: Internal.ReplacementMatch_): boolean;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        replaceOutput(recipe: Internal.RecipeJS_, original: Internal.Either_<H, L>, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): Internal.Either<H, L>;
        componentType(): string;
        isInput(recipe: Internal.RecipeJS_, value: Internal.Either_<H, L>, match: Internal.ReplacementMatch_): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.Either<H, L>>;
        static builder(): Internal.RecipeComponentBuilder;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        checkValueHasChanged(oldValue: Internal.Either_<H, L>, newValue: Internal.Either_<H, L>): boolean;
        replaceInput(recipe: Internal.RecipeJS_, original: Internal.Either_<H, L>, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): Internal.Either<H, L>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        checkEmpty(key: Internal.RecipeKey_<Internal.Either<H, L>>, value: Internal.Either_<H, L>): string;
        checkValueHasChanged(arg0: any, arg1: any): boolean;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<Internal.Either<H, L>, O>;
        isOutput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        key(name: string): Internal.RecipeKey<Internal.Either<H, L>>;
        replaceInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_, arg3: Internal.InputReplacement_): any;
        orSelf(): Internal.RecipeComponent<Internal.Either<H, L>>;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.Either<H, L>>;
        isInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<Internal.Either<H, L>>;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<Internal.Either<H, L>>;
    }
    type OrRecipeComponent_<H, L> = OrRecipeComponent<H, L>;
    abstract class PainterObject implements Internal.SpecialEquality {
        constructor()
        id(i: string): this;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        update(tag: Internal.CompoundTag_): void;
        specialEquals(o: any, shallow: boolean): boolean;
        parent: Internal.PainterObjectStorage;
        visible: Internal.Unit;
        id: string;
    }
    type PainterObject_ = PainterObject;
    interface Matrix3x2fc {
        abstract m00(): number;
        abstract get4x4(arg0: number[]): number[];
        abstract scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract unprojectInv(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector2f_): Internal.Vector2f;
        abstract scaleLocal(arg0: number, arg1: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract normalizedPositiveX(arg0: Internal.Vector2f_): Internal.Vector2f;
        abstract scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract m21(): number;
        abstract testCircle(arg0: number, arg1: number, arg2: number): boolean;
        abstract isFinite(): boolean;
        abstract positiveX(arg0: Internal.Vector2f_): Internal.Vector2f;
        abstract get4x4(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mulLocal(arg0: Internal.Matrix3x2fc_, arg1: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract translate(arg0: number, arg1: number, arg2: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract transformDirection(arg0: number, arg1: number, arg2: Internal.Vector2f_): Internal.Vector2f;
        abstract m10(): number;
        abstract getToAddress(arg0: number): this;
        abstract get(arg0: number[]): number[];
        abstract rotateLocal(arg0: number, arg1: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract rotateTo(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_, arg2: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract get4x4(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract transformPosition(arg0: number, arg1: number, arg2: Internal.Vector2f_): Internal.Vector2f;
        abstract scaleLocal(arg0: number, arg1: number, arg2: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract get(arg0: number[], arg1: number): number[];
        abstract get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract view(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract determinant(): number;
        abstract scale(arg0: number, arg1: number, arg2: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract origin(arg0: Internal.Vector2f_): Internal.Vector2f;
        abstract scaleAround(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract m01(): number;
        abstract translateLocal(arg0: Internal.Vector2fc_, arg1: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract testAar(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        abstract translate(arg0: Internal.Vector2fc_, arg1: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract normalizedPositiveY(arg0: Internal.Vector2f_): Internal.Vector2f;
        abstract get3x3(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract transform(arg0: Vector3f_, arg1: Vector3f_): Vector3f;
        abstract m20(): number;
        abstract transformPosition(arg0: Internal.Vector2f_): Internal.Vector2f;
        abstract get(arg0: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        abstract get3x3(arg0: number[]): number[];
        abstract get4x4(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get3x3(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract positiveY(arg0: Internal.Vector2f_): Internal.Vector2f;
        abstract transformDirection(arg0: Internal.Vector2f_): Internal.Vector2f;
        abstract transformDirection(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): Internal.Vector2f;
        abstract get4x4(arg0: number[], arg1: number): number[];
        abstract viewArea(arg0: number[]): number[];
        abstract unproject(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector2f_): Internal.Vector2f;
        abstract rotateAbout(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract m11(): number;
        abstract get4x4(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get3x3(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get3x3(arg0: number[], arg1: number): number[];
        abstract mul(arg0: Internal.Matrix3x2fc_, arg1: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract equals(arg0: Internal.Matrix3x2fc_, arg1: number): boolean;
        abstract transform(arg0: Vector3f_): Vector3f;
        abstract translateLocal(arg0: number, arg1: number, arg2: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract testPoint(arg0: number, arg1: number): boolean;
        abstract scale(arg0: number, arg1: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract transformPosition(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): Internal.Vector2f;
        abstract scale(arg0: Internal.Vector2fc_, arg1: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract invert(arg0: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract rotate(arg0: number, arg1: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        abstract get3x3(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        get finite(): boolean
    }
    type Matrix3x2fc_ = Matrix3x2fc;
    class Vector3 <N extends number> {
        constructor(x: N, y: N, z: N)
        getX(): N;
        getY(): N;
        getZ(): N;
        get x(): N
        get y(): N
        get z(): N
    }
    type Vector3_<N extends number> = Vector3<N>;
    interface CompletionHandler <V, A> {
        abstract completed(arg0: V, arg1: A): void;
        abstract failed(arg0: Internal.Throwable_, arg1: A): void;
    }
    type CompletionHandler_<V, A> = CompletionHandler<V, A>;
    class AcidicRadrockBlock extends Internal.Block {
        constructor()
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type AcidicRadrockBlock_ = AcidicRadrockBlock;
    class OnslaughtEffect extends Internal.MobEffect {
        constructor(statusEffectCategory: Internal.MobEffectCategory_, color: number)
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type OnslaughtEffect_ = OnslaughtEffect;
    class KilledTrigger$TriggerInstance extends Internal.AbstractCriterionTriggerInstance {
        constructor(arg0: ResourceLocation_, arg1: Internal.ContextAwarePredicate_, arg2: Internal.ContextAwarePredicate_, arg3: Internal.DamageSourcePredicate_)
        static playerKilledEntityNearSculkCatalyst(): Internal.KilledTrigger$TriggerInstance;
        static playerKilledEntity(arg0: Internal.EntityPredicate_, arg1: Internal.DamageSourcePredicate_): Internal.KilledTrigger$TriggerInstance;
        static playerKilledEntity(arg0: Internal.EntityPredicate$Builder_, arg1: Internal.DamageSourcePredicate$Builder_): Internal.KilledTrigger$TriggerInstance;
        static entityKilledPlayer(arg0: Internal.EntityPredicate_, arg1: Internal.DamageSourcePredicate$Builder_): Internal.KilledTrigger$TriggerInstance;
        static playerKilledEntity(arg0: Internal.EntityPredicate_): Internal.KilledTrigger$TriggerInstance;
        static playerKilledEntity(arg0: Internal.EntityPredicate$Builder_, arg1: Internal.DamageSourcePredicate_): Internal.KilledTrigger$TriggerInstance;
        static playerKilledEntity(): Internal.KilledTrigger$TriggerInstance;
        matches(arg0: Internal.ServerPlayer_, arg1: Internal.LootContext_, arg2: DamageSource_): boolean;
        static playerKilledEntity(arg0: Internal.EntityPredicate$Builder_): Internal.KilledTrigger$TriggerInstance;
        static entityKilledPlayer(arg0: Internal.EntityPredicate_, arg1: Internal.DamageSourcePredicate_): Internal.KilledTrigger$TriggerInstance;
        static entityKilledPlayer(arg0: Internal.EntityPredicate$Builder_, arg1: Internal.DamageSourcePredicate$Builder_): Internal.KilledTrigger$TriggerInstance;
        static playerKilledEntity(arg0: Internal.EntityPredicate_, arg1: Internal.DamageSourcePredicate$Builder_): Internal.KilledTrigger$TriggerInstance;
        static entityKilledPlayer(arg0: Internal.EntityPredicate_): Internal.KilledTrigger$TriggerInstance;
        static entityKilledPlayer(arg0: Internal.EntityPredicate$Builder_, arg1: Internal.DamageSourcePredicate_): Internal.KilledTrigger$TriggerInstance;
        static entityKilledPlayer(): Internal.KilledTrigger$TriggerInstance;
        static entityKilledPlayer(arg0: Internal.EntityPredicate$Builder_): Internal.KilledTrigger$TriggerInstance;
    }
    type KilledTrigger$TriggerInstance_ = KilledTrigger$TriggerInstance;
    class CopperDetonatorItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vector3f;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setArmorToughness(armorToughness: number): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        static getCosmeticMode(arg0: Internal.ItemStack_): string;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        static readonly MODE_SWITCH_TIMING: 10;
    }
    type CopperDetonatorItem_ = CopperDetonatorItem;
    class RecipeComponentBuilder implements Internal.RecipeComponent<Internal.RecipeComponentBuilderMap> {
        constructor(init: number)
        replaceOutput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_, arg3: Internal.OutputReplacement_): any;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.RecipeComponentBuilderMap>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.RecipeComponentBuilderMap>, map: Internal.Map_<any, any>): void;
        replaceOutput(recipe: Internal.RecipeJS_, original: Internal.RecipeComponentBuilderMap_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): Internal.RecipeComponentBuilderMap;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, Internal.RecipeComponentBuilderMap>>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<Internal.RecipeComponentBuilderMap>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        orSelf(): Internal.RecipeComponent<Internal.RecipeComponentBuilderMap>;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        asArray(): Internal.ArrayRecipeComponent<Internal.RecipeComponentBuilderMap>;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, Internal.RecipeComponentBuilderMap>>;
        createCopy(): this;
        hasPriority(hasPriority: Internal.Predicate_<Internal.Set<string>>): this;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<Internal.RecipeComponentBuilderMap>;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<Internal.RecipeComponentBuilderMap>;
        key(name: string): Internal.RecipeKey<Internal.RecipeComponentBuilderMap>;
        add(key: Internal.RecipeKey_<any>): this;
        static builder(): Internal.RecipeComponentBuilder;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<Internal.RecipeComponentBuilderMap, O>;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.RecipeComponentBuilderMap>;
        write(recipe: Internal.RecipeJS_, value: Internal.RecipeComponentBuilderMap_): Internal.JsonElement;
        checkValueHasChanged(oldValue: Internal.RecipeComponentBuilderMap_, newValue: Internal.RecipeComponentBuilderMap_): boolean;
        outputRole(): this;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        checkValueHasChanged(arg0: any, arg1: any): boolean;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.RecipeComponentBuilderMap>, json: Internal.JsonObject_): void;
        isOutput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        replaceInput(recipe: Internal.RecipeJS_, original: Internal.RecipeComponentBuilderMap_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): Internal.RecipeComponentBuilderMap;
        replaceInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_, arg3: Internal.InputReplacement_): any;
        read(recipe: Internal.RecipeJS_, from: any): Internal.RecipeComponentBuilderMap;
        checkEmpty(key: Internal.RecipeKey_<Internal.RecipeComponentBuilderMap>, value: Internal.RecipeComponentBuilderMap_): string;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.RecipeComponentBuilderMap>;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<Internal.RecipeComponentBuilderMap, O>;
        inputRole(): this;
        isInput(recipe: Internal.RecipeJS_, value: Internal.RecipeComponentBuilderMap_, match: Internal.ReplacementMatch_): boolean;
        isInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        isOutput(recipe: Internal.RecipeJS_, value: Internal.RecipeComponentBuilderMap_, match: Internal.ReplacementMatch_): boolean;
        readonly keys: Internal.List<Internal.RecipeKey<any>>;
        role: Internal.ComponentRole;
        hasPriority: Internal.Predicate<Internal.Set<string>>;
    }
    type RecipeComponentBuilder_ = RecipeComponentBuilder;
    class BubbledEffect extends Internal.MobEffect {
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
    }
    type BubbledEffect_ = BubbledEffect;
    interface IMagicEntity {
        abstract setBurningDashDirectionData(): void;
        abstract getMagicData(): Internal.MagicData;
        abstract isCasting(): boolean;
        abstract setTeleportLocationBehindTarget(arg0: number): boolean;
        abstract setHasUsedSingleAttack(arg0: boolean): void;
        abstract castComplete(): void;
        abstract startDrinkingPotion(): void;
        abstract setSyncedSpellData(arg0: Internal.SyncedSpellData_): void;
        abstract getHasUsedSingleAttack(): boolean;
        abstract getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        abstract isDrinkingPotion(): boolean;
        abstract initiateCastSpell(arg0: Internal.AbstractSpell_, arg1: number): void;
        abstract cancelCast(): void;
        abstract notifyDangerousProjectile(arg0: Internal.Projectile_): void;
        get magicData(): Internal.MagicData
        get casting(): boolean
        set teleportLocationBehindTarget(arg0: number)
        set hasUsedSingleAttack(arg0: boolean)
        set syncedSpellData(arg0: Internal.SyncedSpellData_)
        get hasUsedSingleAttack(): boolean
        get drinkingPotion(): boolean
    }
    type IMagicEntity_ = IMagicEntity;
    class LocationPredicate implements Internal.LocationPredicateHelper, Internal.LocationPredicateAccess {
        constructor(arg0: Internal.MinMaxBounds$Doubles_, arg1: Internal.MinMaxBounds$Doubles_, arg2: Internal.MinMaxBounds$Doubles_, arg3: Internal.ResourceKey_<Internal.Biome>, arg4: Internal.ResourceKey_<Internal.Structure>, arg5: Internal.ResourceKey_<Internal.Level>, arg6: boolean, arg7: Internal.LightPredicate_, arg8: net.minecraft.advancements.critereon.BlockPredicate_, arg9: Internal.FluidPredicate_)
        getBiome(): Internal.ResourceKey<any>;
        getSmokey(): boolean;
        serializeToJson(): Internal.JsonElement;
        static inStructure(arg0: Internal.ResourceKey_<Internal.Structure>): Internal.LocationPredicate;
        matches(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number): boolean;
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.LocationPredicate$Builder;
        getX(): Internal.MinMaxBounds$Doubles;
        getY(): Internal.MinMaxBounds$Doubles;
        static fromJson(arg0: Internal.JsonElement_): Internal.LocationPredicate;
        getBlock(): net.minecraft.advancements.critereon.BlockPredicate;
        lychee$setBiomeTag(arg0: Internal.TagKey_<any>): void;
        static inBiome(arg0: Internal.ResourceKey_<Internal.Biome>): Internal.LocationPredicate;
        static atYLocation(arg0: Internal.MinMaxBounds$Doubles_): Internal.LocationPredicate;
        getZ(): Internal.MinMaxBounds$Doubles;
        lychee$getBiomeTag(): Internal.TagKey<any>;
        static inDimension(arg0: Internal.ResourceKey_<Internal.Level>): Internal.LocationPredicate;
        getFluid(): Internal.FluidPredicate;
        static toNetwork(arg0: Internal.LocationPredicate_, arg1: Internal.FriendlyByteBuf_): void;
        getDimension(): Internal.ResourceKey<any>;
        getLight(): Internal.LightPredicate;
        getStructure(): Internal.ResourceKey<any>;
        get biome(): Internal.ResourceKey<any>
        get smokey(): boolean
        get x(): Internal.MinMaxBounds$Doubles
        get y(): Internal.MinMaxBounds$Doubles
        get block(): net.minecraft.advancements.critereon.BlockPredicate
        get z(): Internal.MinMaxBounds$Doubles
        get fluid(): Internal.FluidPredicate
        get dimension(): Internal.ResourceKey<any>
        get light(): Internal.LightPredicate
        get structure(): Internal.ResourceKey<any>
        static readonly ANY: Internal.LocationPredicate;
    }
    type LocationPredicate_ = LocationPredicate;
    interface ResourceProvider {
        open(arg0: ResourceLocation_): Internal.InputStream;
        fromMap(arg0: Internal.Map_<ResourceLocation, Internal.Resource>): this;
        openAsReader(arg0: ResourceLocation_): Internal.BufferedReader;
        abstract getResource(arg0: ResourceLocation_): Internal.Optional<Internal.Resource>;
        getResourceOrThrow(arg0: ResourceLocation_): Internal.Resource;
        (arg0: ResourceLocation): Internal.Optional_<Internal.Resource>;
    }
    type ResourceProvider_ = ResourceProvider;
    interface BlockKeyRecipe <T> extends Internal.Comparable<T> {
        abstract compareTo(arg0: T): number;
        abstract getBlock(): net.minecraft.advancements.critereon.BlockPredicate;
        get block(): net.minecraft.advancements.critereon.BlockPredicate
    }
    type BlockKeyRecipe_<T> = BlockKeyRecipe<T>;
    class SlimeJSBuilder extends Internal.MobBuilder<any> {
        constructor(i: ResourceLocation_)
        /**
         * @param dealDamage Overrides the way the slime deals damage
         * 
         * Example usage:
         * ```javascript
         * builder.dealDamage(ctx => {
         * 	const { entity, target } = ctx
         * 	// Determine how the slime deals damage
         * });
         * ```
        */
        dealDamage(dealDamage: Internal.Consumer_<Internal.ContextUtils$LivingEntityContext>): this;
        createObject(): any;
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
        */
        defaultGoals(defaultGoals: boolean): this;
        /**
         * @param setSquishSound Sets the squish sound
         * 
         * Example usage:
         * ```javascript
         * builder.setSquishSound("block.azalea.hit");
         * ```
        */
        setSquishSound(sound: Internal.SoundEvent_): this;
        /**
         * @param setParticleType Sets the particles emitted off the slime
         * Defaults to slime particles
         * 
         * Example usage:
         * ```javascript
         * builder.setParticleType("crit");
         * ```
        */
        setParticleType(type: Internal.ParticleType_<any>): this;
        /**
         * @param setSquishSound Sets the squish sound
         * 
         * Example usage:
         * ```javascript
         * builder.setSquishSound("block.azalea.hit");
         * ```
        */
        set squishSound(sound: Internal.SoundEvent_)
        /**
         * @param setParticleType Sets the particles emitted off the slime
         * Defaults to slime particles
         * 
         * Example usage:
         * ```javascript
         * builder.setParticleType("crit");
         * ```
        */
        set particleType(type: Internal.ParticleType_<any>)
    }
    type SlimeJSBuilder_ = SlimeJSBuilder;
    class CubeDefinition {
        constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.CubeDeformation_, arg10: boolean, arg11: number, arg12: number, arg13: Internal.Set_<Internal.Direction>)
        bake(arg0: number, arg1: number): Internal.ModelPart$Cube;
    }
    type CubeDefinition_ = CubeDefinition;
    interface IntConsumer {
        abstract accept(arg0: number): void;
        andThen(arg0: Internal.IntConsumer_): this;
        (arg0: number): void;
    }
    type IntConsumer_ = IntConsumer;
    abstract class AbstractList <E> extends Internal.AbstractCollection<E> implements Internal.List<E> {
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        abstract get(arg0: number): E;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        listIterator(): Internal.ListIterator<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        parallelStream(): Internal.Stream<E>;
        sort(arg0: Internal.Comparator_<E>): void;
        set(arg0: number, arg1: E): E;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        static of<E>(...arg0: E[]): Internal.List<E>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        addAll(arg0: number, arg1: Internal.Collection_<E>): boolean;
        remove(arg0: number): E;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        subList(arg0: number, arg1: number): Internal.List<E>;
        replaceAll(arg0: Internal.UnaryOperator_<E>): void;
        indexOf(arg0: any): number;
        add(arg0: number, arg1: E): void;
        forEach(arg0: Internal.Consumer_<E>): void;
        abstract toArray<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        listIterator(arg0: number): Internal.ListIterator<E>;
        iterator(): Internal.Iterator<E>;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        stream(): Internal.Stream<E>;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        spliterator(): Internal.Spliterator<E>;
        lastIndexOf(arg0: any): number;
    }
    type AbstractList_<E> = AbstractList<E>;
    class LootContextParamSet$Builder {
        constructor()
        build(): Internal.LootContextParamSet;
        optional(arg0: Internal.LootContextParam_<any>): this;
        required(arg0: Internal.LootContextParam_<any>): this;
    }
    type LootContextParamSet$Builder_ = LootContextParamSet$Builder;
    interface Mesh {
        abstract forEach(arg0: Internal.Consumer_<Internal.QuadView>): void;
        outputTo(emitter: Internal.QuadEmitter_): void;
        (arg0: Internal.Consumer<Internal.QuadView>): void;
    }
    type Mesh_ = Mesh;
    class KilledByCrossbowTrigger$TriggerInstance extends Internal.AbstractCriterionTriggerInstance {
        constructor(arg0: Internal.ContextAwarePredicate_, arg1: Internal.ContextAwarePredicate_[], arg2: Internal.MinMaxBounds$Ints_)
        static crossbowKilled(...arg0: Internal.EntityPredicate$Builder_[]): Internal.KilledByCrossbowTrigger$TriggerInstance;
        matches(arg0: Internal.Collection_<Internal.LootContext>, arg1: number): boolean;
        static crossbowKilled(arg0: Internal.MinMaxBounds$Ints_): Internal.KilledByCrossbowTrigger$TriggerInstance;
    }
    type KilledByCrossbowTrigger$TriggerInstance_ = KilledByCrossbowTrigger$TriggerInstance;
    class ClientboundContainerClosePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getContainerId(): number;
        isSkippable(): boolean;
        get containerId(): number
        get skippable(): boolean
    }
    type ClientboundContainerClosePacket_ = ClientboundContainerClosePacket;
    interface ConfigParser <C extends Internal.Config> {
        parse(arg0: Internal.File_, arg1: Internal.FileNotFoundAction_): C;
        parse(arg0: Internal.InputStream_, arg1: Internal.Config_, arg2: Internal.ParsingMode_, arg3: Internal.Charset_): void;
        parse(arg0: Internal.File_, arg1: Internal.Config_, arg2: Internal.ParsingMode_, arg3: Internal.FileNotFoundAction_): void;
        parse(arg0: Internal.InputStream_, arg1: Internal.Config_, arg2: Internal.ParsingMode_): void;
        parse(arg0: Internal.Path_, arg1: Internal.Config_, arg2: Internal.ParsingMode_, arg3: Internal.FileNotFoundAction_): void;
        parse(arg0: Internal.File_, arg1: Internal.Config_, arg2: Internal.ParsingMode_, arg3: Internal.FileNotFoundAction_, arg4: Internal.Charset_): void;
        abstract parse(arg0: Internal.Reader_, arg1: Internal.Config_, arg2: Internal.ParsingMode_): void;
        parse(arg0: string, arg1: Internal.Config_, arg2: Internal.ParsingMode_): void;
        parse(arg0: Internal.Path_, arg1: Internal.FileNotFoundAction_): C;
        abstract getFormat(): Internal.ConfigFormat<C>;
        abstract parse(arg0: Internal.Reader_): C;
        parse(arg0: Internal.URL_): C;
        parse(arg0: Internal.InputStream_): C;
        parse(arg0: string): C;
        parse(arg0: Internal.InputStream_, arg1: Internal.Charset_): C;
        parse(arg0: Internal.File_, arg1: Internal.FileNotFoundAction_, arg2: Internal.Charset_): C;
        parse(arg0: Internal.Path_, arg1: Internal.Config_, arg2: Internal.ParsingMode_, arg3: Internal.FileNotFoundAction_, arg4: Internal.Charset_): void;
        parse(arg0: Internal.Path_, arg1: Internal.FileNotFoundAction_, arg2: Internal.Charset_): C;
        parse(arg0: Internal.URL_, arg1: Internal.Config_, arg2: Internal.ParsingMode_): void;
        get format(): Internal.ConfigFormat<C>
    }
    type ConfigParser_<C extends Internal.Config> = ConfigParser<C>;
    class GeoLayerJSBuilder <T extends Internal.LivingEntity & Internal.IAnimatableJS> {
        constructor(builder: Internal.BaseLivingEntityBuilder_<T>)
        buildGlowing(entityRendererIn: Internal.KubeJSEntityRenderer_<T>, builder: Internal.BaseLivingEntityBuilder_<T>): Internal.GlowingGeoLayerJS<T>;
        build(entityRendererIn: Internal.KubeJSEntityRenderer_<T>, builder: Internal.BaseLivingEntityBuilder_<T>): Internal.GeoLayerJS<T>;
        /**
         * Defines logic to render the newGeoLayer.
         * By default this will render the flat texture set in textureResource
         * onto the entity as an overlay. This method overrides the render method completely
         * allowing scripters to define their own render logic.
         * 
         * Example usage:
         * ```javascript
         * geoBuilder.render(context => {
         *     // Define logic to render the newGeoLayer
         *     if (context.entity.isBaby()) {
         *         context.poseStack.scale(0.5, 0.5, 0.5);
         *     }
         * });
         * ```
        */
        render(render: Internal.Consumer_<Internal.ContextUtils$PreRenderContext<T>>): this;
        /**
         * Defines logic to preRender the newGeoLayer.
         * 
         * Example usage:
         * ```javascript
         * geoBuilder.preRender(context => {
         *     // Define logic to render the newGeoLayer
         *     if (context.entity.isBaby()) {
         *         context.poseStack.scale(0.5, 0.5, 0.5);
         *     }
         * });
         * ```
        */
        preRender(preRender: Internal.Consumer_<Internal.ContextUtils$PreRenderContext<T>>): this;
        getBuilder(): Internal.BaseLivingEntityBuilder<T>;
        /**
         * Sets the render type for the entity's layer.
         * 
         * Example usage:
         * ```javascript
         * builder.setRenderType(RenderType.entityCutoutNoCull("kubejs:path/to/texture", true));
         * ```
        */
        setRenderType(type: Internal.RenderType_): this;
        /**
         * Sets a function to determine the texture resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the texture based on information about the entity.
         * The default behavior returns <namespace>:textures/entity/<path>.png.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.textureResource(entity => {
         *     // Define logic to determine the texture resource for the entity
         *     // Use information about the entity provided by the context.
         *     return "kubejs:textures/entity/wyrm.png" // Some ResourceLocation representing the texture resource;
         * });
         * ```
        */
        textureResource(function_: Internal.Function_<T, any>): this;
        /**
         * Sets the render type for the entity's layer via a function.
         * 
         * Example usage:
         * ```javascript
         * builder.renderType(entity => RenderType.entityCutoutNoCull("kubejs:path/to/texture", true));
         * ```
        */
        renderType(type: Internal.Function_<T, Internal.RenderType>): this;
        get builder(): Internal.BaseLivingEntityBuilder<T>
        /**
         * Sets the render type for the entity's layer.
         * 
         * Example usage:
         * ```javascript
         * builder.setRenderType(RenderType.entityCutoutNoCull("kubejs:path/to/texture", true));
         * ```
        */
        set renderType(type: Internal.RenderType_)
        builder: Internal.BaseLivingEntityBuilder<T>;
    }
    type GeoLayerJSBuilder_<T extends Internal.LivingEntity & Internal.IAnimatableJS> = GeoLayerJSBuilder<T>;
    class ProfilePublicKey$Data extends Internal.Record {
        constructor(arg0: Internal.Instant_, arg1: Internal.PublicKey_, arg2: number[])
        constructor(arg0: Internal.FriendlyByteBuf_)
        key(): Internal.PublicKey;
        write(arg0: Internal.FriendlyByteBuf_): void;
        keySignature(): number[];
        hasExpired(arg0: Duration_): boolean;
        hasExpired(): boolean;
        expiresAt(): Internal.Instant;
        validateSignature(arg0: Internal.SignatureValidator_, arg1: Internal.UUID_): boolean;
        static readonly CODEC: Internal.Codec<Internal.ProfilePublicKey$Data>;
    }
    type ProfilePublicKey$Data_ = ProfilePublicKey$Data;
    abstract class AbstractObjectList <K> extends Internal.AbstractObjectCollection<K> implements it.unimi.dsi.fastutil.Stack<K>, Internal.ObjectList<K> {
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        setElements(arg0: number, arg1: K[]): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        compareTo(arg0: any): number;
        set(arg0: number, arg1: K): K;
        parallelStream(): Internal.Stream<K>;
        addAll(arg0: number, arg1: Internal.Collection_<K>): boolean;
        addElements(arg0: number, arg1: K[], arg2: number, arg3: number): void;
        static of<K>(): Internal.ObjectList<K>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        setElements(arg0: K[]): void;
        peek(arg0: number): K;
        static of<K>(...arg0: K[]): Internal.ObjectList<K>;
        size(arg0: number): void;
        remove(arg0: number): K;
        indexOf(arg0: any): number;
        static of<K>(arg0: K, arg1: K, arg2: K): Internal.ObjectList<K>;
        pop(): K;
        listIterator(): Internal.ObjectListIterator<K>;
        toArray<T>(arg0: T[]): T[];
        removeIf(arg0: Internal.Predicate_<K>): boolean;
        spliterator(): Internal.Spliterator<any>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        lastIndexOf(arg0: any): number;
        setElements(arg0: number, arg1: K[], arg2: number, arg3: number): void;
        removeElements(arg0: number, arg1: number): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        listIterator(arg0: number): Internal.ListIterator<any>;
        addElements(arg0: number, arg1: K[]): void;
        static of<K>(arg0: K): Internal.ObjectList<K>;
        abstract get(arg0: number): K;
        addAll(arg0: number, arg1: Internal.ObjectList_<K>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        top(): K;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        add(arg0: number, arg1: K): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        replaceAll(arg0: Internal.UnaryOperator_<K>): void;
        static of<K>(arg0: K, arg1: K): Internal.ObjectList<K>;
        subList(arg0: number, arg1: number): Internal.List<any>;
        unstableSort(arg0: Internal.Comparator_<K>): void;
        addAll(arg0: Internal.ObjectList_<K>): boolean;
        iterator(): Internal.ObjectListIterator<K>;
        compareTo(arg0: Internal.List_<K>): number;
        sort(arg0: Internal.Comparator_<K>): void;
        push(arg0: K): void;
        stream(): Internal.Stream<K>;
        getElements(arg0: number, arg1: any[], arg2: number, arg3: number): void;
        set elements(arg0: K[])
    }
    type AbstractObjectList_<K> = AbstractObjectList<K>;
    class MangroveRootPlacer extends Internal.RootPlacer {
        constructor(arg0: Internal.IntProvider_, arg1: Internal.BlockStateProvider_, arg2: Internal.Optional_<Internal.AboveRootPlacement>, arg3: any_)
        potentialRootPositions(arg0: BlockPos_, arg1: Internal.Direction_, arg2: Internal.RandomSource_, arg3: BlockPos_): Internal.List<BlockPos>;
        static readonly CODEC: Internal.Codec<Internal.MangroveRootPlacer>;
        static readonly ROOT_WIDTH_LIMIT: 8;
        static readonly ROOT_LENGTH_LIMIT: 15;
    }
    type MangroveRootPlacer_ = MangroveRootPlacer;
    class AreaOfEffectConfiguration <A extends Internal.ConfiguredFactory<any, any, any>, C extends Internal.ConfiguredCondition<any, any, any>> extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(radius: number, action: Internal.Holder_<A>, condition: Internal.Holder_<C>, shape: io.github.apace100.apoli.util.Shape_, includeTarget: boolean)
        shape(): io.github.apace100.apoli.util.Shape;
        isConfigurationValid(): boolean;
        includeTarget(): boolean;
        static createCodec<A extends Internal.ConfiguredFactory<any, any, any>, C extends Internal.ConfiguredCondition<any, any, any>>(arg0: Internal.MapCodec_<Internal.Holder<A>>, arg1: Internal.MapCodec_<Internal.Holder<C>>): Internal.Codec<Internal.AreaOfEffectConfiguration<A, C>>;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        getMissingBinds(): Internal.List<string>;
        action(): Internal.Holder<A>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        condition(): Internal.Holder<C>;
        radius(): number;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
    }
    type AreaOfEffectConfiguration_<A extends Internal.ConfiguredFactory<any, any, any>, C extends Internal.ConfiguredCondition<any, any, any>> = AreaOfEffectConfiguration<A, C>;
    interface Endec$Decoder <T> {
        abstract decode(arg0: io.wispforest.endec.SerializationContext_, arg1: Internal.Deserializer_<any>): T;
        (arg0: io.wispforest.endec.SerializationContext, arg1: Internal.Deserializer<any>): T;
    }
    type Endec$Decoder_<T> = Endec$Decoder<T>;
    class NoiseChunk$FlatCache implements Internal.DensityFunctions$MarkerOrMarked, Internal.NoiseChunk$NoiseChunkDensityFunction {
        constructor(arg0: Internal.NoiseChunk_, arg1: Internal.DensityFunction_, arg2: boolean)
        abs(): Internal.DensityFunction;
        halfNegative(): Internal.DensityFunction;
        maxValue(): number;
        codec(): Internal.KeyDispatchDataCodec<Internal.DensityFunction>;
        compute(arg0: Internal.DensityFunction$FunctionContext_): number;
        squeeze(): Internal.DensityFunction;
        square(): Internal.DensityFunction;
        mapAll(arg0: Internal.DensityFunction$Visitor_): Internal.DensityFunction;
        clamp(arg0: number, arg1: number): Internal.DensityFunction;
        wrapped(): Internal.DensityFunction;
        quarterNegative(): Internal.DensityFunction;
        type(): Internal.DensityFunctions$Marker$Type;
        cube(): Internal.DensityFunction;
        fillArray(arg0: number[], arg1: Internal.DensityFunction$ContextProvider_): void;
        minValue(): number;
        readonly f_209325_: Internal.NoiseChunk;
        readonly values: number[][];
    }
    type NoiseChunk$FlatCache_ = NoiseChunk$FlatCache;
    interface IEntityOwned {
        abstract getOwner(): Internal.LivingEntity;
        abstract setOwner(arg0: Internal.LivingEntity_): void;
        get owner(): Internal.LivingEntity
        set owner(arg0: Internal.LivingEntity_)
    }
    type IEntityOwned_ = IEntityOwned;
    class ServerboundSeenAdvancementsPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.ServerboundSeenAdvancementsPacket$Action_, arg1: ResourceLocation_)
        static openedTab(arg0: Internal.Advancement_): Internal.ServerboundSeenAdvancementsPacket;
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        static closedScreen(): Internal.ServerboundSeenAdvancementsPacket;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getAction(): Internal.ServerboundSeenAdvancementsPacket$Action;
        getTab(): ResourceLocation;
        isSkippable(): boolean;
        get action(): Internal.ServerboundSeenAdvancementsPacket$Action
        get tab(): ResourceLocation
        get skippable(): boolean
    }
    type ServerboundSeenAdvancementsPacket_ = ServerboundSeenAdvancementsPacket;
    class TemporaryCobwebBlock extends Internal.WebBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isShearable(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        onSheared(arg0: Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: number): Internal.List<Internal.ItemStack>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type TemporaryCobwebBlock_ = TemporaryCobwebBlock;
    class DynamicRegistrationEvent <T> extends Internal.GenericEvent<T> {
        constructor()
        constructor(arg0: T, arg1: ResourceLocation_, arg2: T)
        getOriginal(): T;
        setNewEntry(arg0: T): void;
        getRegistryName(): ResourceLocation;
        withCancellationReason(arg0: string): this;
        getCancellationReason(): string;
        getNewEntry(): T;
        get original(): T
        set newEntry(arg0: T)
        get registryName(): ResourceLocation
        get cancellationReason(): string
        get newEntry(): T
    }
    type DynamicRegistrationEvent_<T> = DynamicRegistrationEvent<T>;
    interface IForgeDimensionSpecialEffects {
        renderSnowAndRain(arg0: Internal.ClientLevel_, arg1: number, arg2: number, arg3: Internal.LightTexture_, arg4: number, arg5: number, arg6: number): boolean;
        renderClouds(arg0: Internal.ClientLevel_, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: number, arg5: number, arg6: number, arg7: Matrix4f_): boolean;
        tickRain(arg0: Internal.ClientLevel_, arg1: number, arg2: Internal.Camera_): boolean;
        renderSky(arg0: Internal.ClientLevel_, arg1: number, arg2: number, arg3: Internal.PoseStack_, arg4: Internal.Camera_, arg5: Matrix4f_, arg6: boolean, arg7: Internal.Runnable_): boolean;
        adjustLightmapColors(arg0: Internal.ClientLevel_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: Vector3f_): void;
    }
    type IForgeDimensionSpecialEffects_ = IForgeDimensionSpecialEffects;
    abstract class AbstractCaveGenerationStructure extends Internal.Structure {
        abstract getWidthRadius(arg0: Internal.WorldgenRandom_): number;
        abstract getGenerateYHeight(arg0: Internal.WorldgenRandom_, arg1: number, arg2: number): number;
        generatePieces(arg0: Internal.StructurePiecesBuilder_, arg1: Internal.Structure$GenerationContext_): void;
        abstract getHeightRadius(arg0: Internal.WorldgenRandom_, arg1: number): number;
    }
    type AbstractCaveGenerationStructure_ = AbstractCaveGenerationStructure;
    class AnnotationDetector$Wrapper <A extends Internal.Annotation, T> extends Internal.Record {
        constructor(annotation: A, clazz: T, creator: Internal.Supplier_<T>)
        creator(): Internal.Supplier<T>;
        clazz(): T;
        annotation(): A;
    }
    type AnnotationDetector$Wrapper_<A extends Internal.Annotation, T> = AnnotationDetector$Wrapper<A, T>;
    class BidiRun {
        getStart(): number;
        isEvenRun(): boolean;
        getEmbeddingLevel(): number;
        isOddRun(): boolean;
        getDirection(): number;
        getLimit(): number;
        getLength(): number;
        get start(): number
        get evenRun(): boolean
        get embeddingLevel(): number
        get oddRun(): boolean
        get direction(): number
        get limit(): number
        get length(): number
    }
    type BidiRun_ = BidiRun;
    class SimpleCommandExceptionType implements Internal.CommandExceptionType {
        constructor(arg0: com.mojang.brigadier.Message_)
        createWithContext(arg0: Internal.ImmutableStringReader_): Internal.CommandSyntaxException;
        create(): Internal.CommandSyntaxException;
    }
    type SimpleCommandExceptionType_ = SimpleCommandExceptionType;
    class VanillaGameEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.Level_, arg1: Internal.GameEvent_, arg2: Vec3d_, arg3: Internal.GameEvent$Context_)
        getLevel(): Internal.Level;
        getContext(): Internal.GameEvent$Context;
        getCause(): Internal.Entity;
        getEventPosition(): Vec3d;
        getVanillaEvent(): Internal.GameEvent;
        get level(): Internal.Level
        get context(): Internal.GameEvent$Context
        get cause(): Internal.Entity
        get eventPosition(): Vec3d
        get vanillaEvent(): Internal.GameEvent
    }
    type VanillaGameEvent_ = VanillaGameEvent;
    class FlatLevelGeneratorPreset extends Internal.Record {
        constructor(arg0: Internal.Holder_<Internal.Item>, arg1: Internal.FlatLevelGeneratorSettings_)
        settings(): Internal.FlatLevelGeneratorSettings;
        displayItem(): Internal.Holder<Internal.Item>;
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.FlatLevelGeneratorPreset>>;
        static readonly DIRECT_CODEC: Internal.Codec<Internal.FlatLevelGeneratorPreset>;
    }
    type FlatLevelGeneratorPreset_ = FlatLevelGeneratorPreset | Special.FlatLevelGeneratorPreset;
    interface ConstantDesc {
        abstract resolveConstantDesc(arg0: Internal.MethodHandles$Lookup_): any;
        (arg0: Internal.MethodHandles$Lookup): any;
    }
    type ConstantDesc_ = ConstantDesc;
    class ChunkRenderDispatcher$ChunkTaskResult extends Internal.Enum<Internal.ChunkRenderDispatcher$ChunkTaskResult> {
        static values(): Internal.ChunkRenderDispatcher$ChunkTaskResult[];
        static valueOf(arg0: string): Internal.ChunkRenderDispatcher$ChunkTaskResult;
        static readonly SUCCESSFUL: Internal.ChunkRenderDispatcher$ChunkTaskResult;
        static readonly CANCELLED: Internal.ChunkRenderDispatcher$ChunkTaskResult;
    }
    type ChunkRenderDispatcher$ChunkTaskResult_ = "successful" | ChunkRenderDispatcher$ChunkTaskResult | "cancelled";
    class ServerboundMoveVehiclePacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Entity_)
        handle(arg0: Internal.PacketListener_): void;
        getX(): number;
        getY(): number;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getZ(): number;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getYRot(): number;
        getXRot(): number;
        isSkippable(): boolean;
        get x(): number
        get y(): number
        get z(): number
        get YRot(): number
        get XRot(): number
        get skippable(): boolean
    }
    type ServerboundMoveVehiclePacket_ = ServerboundMoveVehiclePacket;
    class TextureStitchEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.TextureAtlas_)
        getAtlas(): Internal.TextureAtlas;
        get atlas(): Internal.TextureAtlas
    }
    type TextureStitchEvent_ = TextureStitchEvent;
    abstract class ScreenEvent$MouseButtonReleased extends Internal.ScreenEvent$MouseInput {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number)
        getButton(): number;
        get button(): number
    }
    type ScreenEvent$MouseButtonReleased_ = ScreenEvent$MouseButtonReleased;
    abstract class ActiveCooldownPowerFactory$Simple <T extends Internal.IActiveCooldownPowerConfiguration> extends Internal.ActiveCooldownPowerFactory<T> {
        getProgress(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): number;
        change(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_, arg2: number): number;
        decrement(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): number;
        increment(arg0: Internal.ConfiguredPower_<T, any>, arg1: Internal.Entity_): number;
    }
    type ActiveCooldownPowerFactory$Simple_<T extends Internal.IActiveCooldownPowerConfiguration> = ActiveCooldownPowerFactory$Simple<T>;
    class ObjectiveCriteria {
        constructor(arg0: string, arg1: boolean, arg2: Internal.ObjectiveCriteria$RenderType_)
        constructor(arg0: string)
        static registerCustom(arg0: string): Internal.ObjectiveCriteria;
        static byName(arg0: string): Internal.Optional<Internal.ObjectiveCriteria>;
        getDefaultRenderType(): Internal.ObjectiveCriteria$RenderType;
        getName(): string;
        isReadOnly(): boolean;
        static getCustomCriteriaNames(): Internal.Set<string>;
        static registerCustom(arg0: string, arg1: boolean, arg2: Internal.ObjectiveCriteria$RenderType_): Internal.ObjectiveCriteria;
        get defaultRenderType(): Internal.ObjectiveCriteria$RenderType
        get name(): string
        get readOnly(): boolean
        get customCriteriaNames(): Internal.Set<string>
        static readonly TRIGGER: Internal.ObjectiveCriteria;
        static readonly HEALTH: Internal.ObjectiveCriteria;
        static readonly KILL_COUNT_PLAYERS: Internal.ObjectiveCriteria;
        static readonly TEAM_KILL: Internal.ObjectiveCriteria[];
        static readonly AIR: Internal.ObjectiveCriteria;
        static readonly ARMOR: Internal.ObjectiveCriteria;
        static readonly DUMMY: Internal.ObjectiveCriteria;
        static readonly EXPERIENCE: Internal.ObjectiveCriteria;
        static readonly KILL_COUNT_ALL: Internal.ObjectiveCriteria;
        static readonly DEATH_COUNT: Internal.ObjectiveCriteria;
        static readonly KILLED_BY_TEAM: Internal.ObjectiveCriteria[];
        static readonly LEVEL: Internal.ObjectiveCriteria;
        static readonly FOOD: Internal.ObjectiveCriteria;
    }
    type ObjectiveCriteria_ = ObjectiveCriteria;
    class StraightTrunkPlacer extends Internal.TrunkPlacer {
        constructor(arg0: number, arg1: number, arg2: number)
        static readonly CODEC: Internal.Codec<Internal.StraightTrunkPlacer>;
    }
    type StraightTrunkPlacer_ = StraightTrunkPlacer;
    class DocumentConstructor extends Internal.AbstractDocument<Internal.DocumentConstructor> {
        constructor()
        constructor(params: Internal.List_<Internal.PropertyParam>)
        static fromJava(info: Internal.ConstructorInfo_): Internal.DocumentConstructor;
        getParams(): Internal.List<Internal.PropertyParam>;
        applyProperties(): Internal.AbstractDocumentBase<any>;
        copy(): this;
        get params(): Internal.List<Internal.PropertyParam>
    }
    type DocumentConstructor_ = DocumentConstructor;
}
declare namespace me.jellysquid.mods.sodium.mixin.features.textures.animations.upload {
    interface SpriteContentsAnimationAccessor {
        abstract getFrameRowSize(): number;
        abstract getFrames(): Internal.List<Internal.SpriteContents$FrameInfo>;
        get frameRowSize(): number
        get frames(): Internal.List<Internal.SpriteContents$FrameInfo>
    }
    type SpriteContentsAnimationAccessor_ = SpriteContentsAnimationAccessor;
}

/// <reference path="./internal_*.d.ts" />
declare namespace dev.architectury.event {
    interface Event <T> {
        abstract invoker(): T;
        abstract unregister(arg0: T): void;
        abstract register(arg0: T): void;
        abstract isRegistered(arg0: T): boolean;
        abstract clearListeners(): void;
    }
    type Event_<T> = Event<T>;
}
declare namespace Internal {
    class Restriction {
        constructor(arg0: Internal.ArtifactVersion_, arg1: boolean, arg2: Internal.ArtifactVersion_, arg3: boolean)
        isUpperBoundInclusive(): boolean;
        isLowerBoundInclusive(): boolean;
        containsVersion(arg0: Internal.ArtifactVersion_): boolean;
        getLowerBound(): Internal.ArtifactVersion;
        getUpperBound(): Internal.ArtifactVersion;
        get upperBoundInclusive(): boolean
        get lowerBoundInclusive(): boolean
        get lowerBound(): Internal.ArtifactVersion
        get upperBound(): Internal.ArtifactVersion
        static readonly EVERYTHING: Internal.Restriction;
    }
    type Restriction_ = Restriction;
    class CaelestisSwordItem extends Internal.UniqueSwordItem {
        constructor(toolMaterial: Internal.Tier_, attackDamage: number, attackSpeed: number, settings: Internal.Item$Properties_)
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
    type CaelestisSwordItem_ = CaelestisSwordItem;
    class LivyatanSwordItem extends Internal.UniqueSwordItem {
        constructor(toolMaterial: Internal.Tier_, attackDamage: number, attackSpeed: number, settings: Internal.Item$Properties_)
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
        static scalesWithSpellPower: false;
    }
    type LivyatanSwordItem_ = LivyatanSwordItem;
    class PartBuilder <T extends Internal.LivingEntity> {
        constructor()
        /**
         * Sets the minimum fall distance for the entity before taking damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setMaxFallDistance(entity => {
         *     // Define custom logic to determine the maximum fall distance
         *     // Use information about the Entity provided by the context.
         *     return 3;
         * });
         * ```
        */
        setMaxFallDistance(maxFallDistance: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets a consumer to handle part entity hurt logic of the entity's parts.
         * 
         * @param onPartHurt Consumer accepting a {@link ContextUtils.PartHurtContext<T>} parameter
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onPartHurt(context => {
         *     const { entity, part, source, amount } = context
         *     // Custom logic for determining how the parts of the entity should relay damage
         *     // For example, hurt the parent entity twice the damage when this part is hit.
         *     entity.attack(source, amount * 2)
         * })
         * ```
        */
        onPartHurt(onPartHurt: Internal.Consumer_<Internal.ContextUtils$PartHurtContext<T>>): this;
        /**
         * Sets a function to determine whether the entity should render at a squared distance.
         * 
         * @param shouldRenderAtSqrDistance Function accepting a {@link ContextUtils.EntitySqrDistanceContext} parameter,
         *                  defining the conditions under which the entity should render.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.shouldRenderAtSqrDistance(context => {
         *     // Custom logic to determine whether the entity should render
         *     // Access information about the distance using the provided context.
         *     return true;
         * });
         * ```
        */
        shouldRenderAtSqrDistance(func: Internal.Function_<Internal.ContextUtils$EntitySqrDistanceContext, any>): this;
        /**
         * Sets a consumer to handle lerping (linear interpolation) of the entity's position.
         * 
         * @param lerpTo Consumer accepting a {@link ContextUtils.LerpToContext} parameter,
         *                 providing information and control over the lerping process.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.lerpTo(context => {
         *     // Custom logic for lerping the entity's position
         *     // Access information about the lerping process using the provided context.
         * });
         * ```
        */
        lerpTo(consumer: Internal.Consumer_<Internal.ContextUtils$LerpToContext>): this;
        /**
         * Sets a callback function to be executed when a player touches the entity.
         * The provided Consumer accepts a {@link ContextUtils.EntityPlayerContext} parameter,
         * representing the context of the player's interaction with the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.playerTouch(context => {
         *     // Custom logic to handle the player's touch interaction with the entity
         *     // Access information about the interaction using the provided context.
         * });
         * ```
        */
        playerTouch(consumer: Internal.Consumer_<Internal.ContextUtils$EntityPlayerContext>): this;
        /**
         * Sets a predicate function to determine whether the entity can change dimensions.
         * The provided Predicate accepts a {@link Entity} parameter,
         * representing the entity that may attempt to change dimensions.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canChangeDimensions(entity => {
         *     // Define the conditions for the entity to be able to change dimensions
         *     // Use information about the Entity provided by the context.
         *     return false // Some boolean condition indicating if the entity can change dimensions;
         * });
         * ```
        */
        canChangeDimensions(supplier: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets a predicate function to determine whether the entity may interact with something.
         * The provided Predicate accepts a {@link ContextUtils.MayInteractContext} parameter,
         * representing the context of the potential interaction, and returns a boolean.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.mayInteract(context => {
         *     // Define conditions for the entity to be allowed to interact
         *     // Use information about the MayInteractContext provided by the context.
         *     return false // Some boolean condition indicating if the entity may interact;
         * });
         * ```
        */
        mayInteract(predicate: Internal.Function_<Internal.ContextUtils$EMayInteractContext, any>): this;
        /**
         * Sets a callback function to be executed on each tick for the entity.
         * 
         * @param consumer A Consumer accepting a {@link Entity} parameter, defining the behavior to be executed on each tick.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.tick(entity => {
         *     // Custom logic to be executed on each tick of the entity.
         *     // Access information about the entity using the provided parameter.
         * });
         * ```
        */
        tick(consumer: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets whether the entity is pushable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isPushable(true);
         * ```
        */
        isPushable(b: boolean): this;
        /**
         * Sets a callback function to be executed when the entity is added to the world.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is added to the world.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onAddedToWorld(entity => {
         *     // Define custom logic for handling when the entity is added to the world
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        onAddedToWorld(onAddedToWorldCallback: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets a function to determine the next step distance for the entity.
         * The provided Function accepts a {@link Entity} parameter,
         * representing the entity whose next step distance is being determined.
         * It returns a Float representing the next step distance.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.nextStep(entity => {
         *     // Define logic to calculate and return the next step distance for the entity
         *     // Use information about the Entity provided by the context.
         *     return // Some Float value representing the next step distance;
         * });
         * ```
        */
        nextStep(nextStep: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Boolean determining if the part entity is pickable.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isPickable(true)
         * ```
        */
        isPickable(isPickable: boolean): this;
        /**
         * Sets a callback function to be executed when the entity stops riding.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that has stopped being ridden.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onStopRiding(entity => {
         *     // Define custom logic for handling when the entity stops being ridden
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        onStopRiding(callback: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets a predicate to determine whether to show the vehicle health for the living entity.
         * 
         * @param predicate The predicate to determine whether to show the vehicle health.
         * 
         * The predicate should take a Entity as a parameter and return a boolean value indicating whether to show the vehicle health.
         * 
         * Example usage:
         * ```javascript
         * baseEntityBuilder.showVehicleHealth(entity => {
         *     // Determine whether to show the vehicle health for the living entity
         *     // Return true to show the vehicle health, false otherwise
         * });
         * ```
        */
        showVehicleHealth(predicate: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets the block jump factor for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setBlockJumpFactor(entity => {
         *     //Set the jump factor for the entity through context
         *     return 1 //some float value;
         * });
         * ```
        */
        setBlockJumpFactor(blockJumpFactor: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets a callback function to be executed when the entity is hurt by lava.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is affected by lava.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.lavaHurt(entity => {
         *     // Define custom logic for handling the entity being hurt by lava
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        lavaHurt(consumer: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Determines if the entity's hitbox collides with other entities the same as a solic block.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.canBeCollidedWith(entity => {
         *         return true
         *     });
         *     ```
        */
        canBeCollidedWith(canBeCollidedWith: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets a callback function to be executed during each tick when the entity is being ridden.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is being ridden.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.rideTick(entity => {
         *     // Define custom logic for handling each tick when the entity is being ridden
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        rideTick(callback: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets the swim sound for the entity using a string representation.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSound("minecraft:entity.generic.swim");
         * ```
        */
        setSwimSound(sound: any): this;
        /**
         * Sets a predicate to determine whether the living entity dampens vibrations.
         * 
         * @param predicate The predicate to determine whether the living entity dampens vibrations.
         * 
         * The predicate should take a Entity as a parameter and return a boolean value indicating whether the living entity dampens vibrations.
         * 
         * Example usage:
         * ```javascript
         * baseEntityBuilder.dampensVibrations(entity => {
         *     // Determine whether the living entity dampens vibrations
         *     // Return true if the entity dampens vibrations, false otherwise
         * });
         * ```
        */
        dampensVibrations(predicate: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets a function to determine the block speed factor of the entity.
         * The provided Function accepts a {@link Entity} parameter,
         * representing the entity whose block speed factor is being determined.
         * It returns a Float representing the block speed factor.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.blockSpeedFactor(entity => {
         *     // Define logic to calculate and return the block speed factor for the entity
         *     // Use information about the Entity provided by the context.
         *     return // Some Float value representing the block speed factor;
         * });
         * ```
        */
        blockSpeedFactor(callback: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets a predicate function to determine whether the entity can trample or step on something.
         * The provided Predicate accepts a {@link ContextUtils.CanTrampleContext} parameter,
         * representing the context of the potential trampling action, and returns a boolean.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canTrample(context => {
         *     // Define conditions for the entity to be allowed to trample
         *     // Use information about the CanTrampleContext provided by the context.
         *     return false // Some boolean condition indicating if the entity can trample;
         * });
         * ```
        */
        canTrample(predicate: Internal.Function_<Internal.ContextUtils$ECanTrampleContext, any>): this;
        /**
         * Sets a predicate function to determine whether the entity can undergo freezing.
         * The provided Predicate accepts a {@link Entity} parameter,
         * representing the entity that may be subjected to freezing.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canFreeze(entity => {
         *     // Define the conditions for the entity to be able to freeze
         *     // Use information about the Entity provided by the context.
         *     return true //someBoolean;
         * });
         * ```
        */
        canFreeze(predicate: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets whether to reposition the entity after loading.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.repositionEntityAfterLoad(true);
         * ```
        */
        repositionEntityAfterLoad(customRepositionEntityAfterLoad: boolean): this;
        /**
         * Sets a callback function to be executed when the entity is removed from the world.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is being removed from the world.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onRemovedFromWorld(entity => {
         *     // Define custom logic for handling the removal of the entity from the world
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        onRemovedFromWorld(consumer: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets a callback function to be executed when the entity is hit by thunder.
         * The provided Consumer accepts a {@link ContextUtils.ThunderHitContext} parameter,
         * representing the context of the entity being hit by thunder.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.thunderHit(context => {
         *     // Define custom logic for handling the entity being hit by thunder
         *     // Use information about the ThunderHitContext provided by the context.
         * });
         * ```
        */
        thunderHit(consumer: Internal.Consumer_<Internal.ContextUtils$EThunderHitContext>): this;
        /**
         * Sets a function to determine whether the entity is currently flapping.
         * The provided Function accepts a {@link Entity} parameter,
         * representing the entity whose flapping status is being determined.
         * It returns a Boolean indicating whether the entity is flapping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isFlapping(entity => {
         *     // Define logic to determine whether the entity is currently flapping
         *     // Use information about the Entity provided by the context.
         *     return // Some Boolean value indicating whether the entity is flapping;
         * });
         * ```
        */
        isFlapping(b: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
         * ```
        */
        setSwimSplashSound(sound: any): this;
        /**
         * Sets a predicate function to determine whether the entity is currently glowing.
         * The provided Predicate accepts a {@link Entity} parameter,
         * representing the entity that may be checked for its glowing state.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isCurrentlyGlowing(entity => {
         *     // Define the conditions to check if the entity is currently glowing
         *     // Use information about the Entity provided by the context.
         *     const isGlowing = // Some boolean condition to check if the entity is glowing;
         *     return isGlowing;
         * });
         * ```
        */
        isCurrentlyGlowing(predicate: Internal.Function_<Internal.Entity, any>): this;
        /**
         * @param positionRider A consumer determining the position of rider/riders.
         * 
         *     Example usage:
         *     ```javascript
         *     entityBuilder.positionRider(context => {
         *         const {entity, passenger, moveFunction} = context
         *     });
         *     ```
        */
        positionRider(builderConsumer: Internal.Consumer_<Internal.ContextUtils$PositionRiderContext>): this;
        /**
         * Sets a callback function to be executed when the entity performs a movement action.
         * The provided Consumer accepts a {@link ContextUtils.MovementContext} parameter,
         * representing the context of the entity's movement.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.move(context => {
         *     // Custom logic to handle the entity's movement action
         *     // Access information about the movement using the provided context.
         * });
         * ```
        */
        move(consumer: Internal.Consumer_<Internal.ContextUtils$MovementContext>): this;
        /**
         * Sets a callback function to be executed when the entity is removed on the client side.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is being removed on the client side.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onClientRemoval(entity => {
         *     // Define custom logic for handling the removal of the entity on the client side
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        onClientRemoval(consumer: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets a predicate function to determine whether the entity is invulnerable to a specific type of damage.
         * The provided Predicate accepts a {@link ContextUtils.DamageContext} parameter,
         * representing the context of the damage, and returns a boolean indicating invulnerability.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isInvulnerableTo(context => {
         *     // Define conditions for the entity to be invulnerable to the specific type of damage
         *     // Use information about the DamageContext provided by the context.
         *     return true // Some boolean condition indicating if the entity has invulnerability to the damage type;
         * });
         * ```
        */
        isInvulnerableTo(predicate: Internal.Function_<Internal.ContextUtils$EDamageContext, any>): this;
        /**
         * Function determining if the entity may collide with another entity
         * using the ContextUtils.CollidingEntityContext which has this entity and the
         * one colliding with this entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canCollideWith(context => {
         *     return true //Some Boolean value determining whether the entity may collide with another
         * });
         * ```
        */
        canCollideWith(canCollideWith: Internal.Function_<Internal.ContextUtils$ECollidingEntityContext, any>): this;
        /**
         * Sets a predicate to determine if a passenger can be added to the entity.
         * 
         * @param predicate The predicate to check if a passenger can be added.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.canAddPassenger(context => {
         *     // Custom logic to determine if a passenger can be added to the entity
         *     return true;
         * });
         * ```
        */
        canAddPassenger(predicate: Internal.Function_<Internal.ContextUtils$EPassengerEntityContext, any>): this;
        /**
         * Defines in what condition the entity will start freezing.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isFreezing(entity => {
         *     return true;
         * });
         * ```
        */
        isFreezing(isFreezing: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets a callback function to be executed when the entity falls and takes damage.
         * The provided Consumer accepts a {@link ContextUtils.EEntityFallDamageContext} parameter,
         * representing the context of the entity falling and taking fall damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onFall(context => {
         *     // Define custom logic for handling when the entity falls and takes damage
         *     // Use information about the EEntityFallDamageContext provided by the context.
         * });
         * ```
        */
        onFall(c: Internal.Consumer_<Internal.ContextUtils$EEntityFallDamageContext>): this;
        /**
         * Sets a callback function to be executed when the entity performs a flap action.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that is flapping.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onFlap(entity => {
         *     // Define custom logic for handling the entity's flap action
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        onFlap(consumer: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets a callback function to be executed when the entity starts sprinting.
         * The provided Consumer accepts a {@link Entity} parameter,
         * representing the entity that has started sprinting.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.onSprint(entity => {
         *     // Define custom logic for handling when the entity starts sprinting
         *     // Use information about the Entity provided by the context.
         * });
         * ```
        */
        onSprint(consumer: Internal.Consumer_<Internal.Entity>): this;
        /**
         * Sets a predicate function to determine whether the entity is attackable.
         * The provided Predicate accepts a {@link Entity} parameter,
         * representing the entity that may be checked for its attackability.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.isAttackable(entity => {
         *     // Define conditions to check if the entity is attackable
         *     // Use information about the Entity provided by the context.
         *     return // Some boolean condition indicating if the entity is attackable;
         * });
         * ```
        */
        isAttackable(predicate: Internal.Function_<Internal.Entity, any>): this;
        /**
         * Sets the minimum fall distance for the entity before taking damage.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setMaxFallDistance(entity => {
         *     // Define custom logic to determine the maximum fall distance
         *     // Use information about the Entity provided by the context.
         *     return 3;
         * });
         * ```
        */
        set maxFallDistance(maxFallDistance: Internal.Function_<Internal.Entity, any>)
        /**
         * Sets the block jump factor for the entity.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setBlockJumpFactor(entity => {
         *     //Set the jump factor for the entity through context
         *     return 1 //some float value;
         * });
         * ```
        */
        set blockJumpFactor(blockJumpFactor: Internal.Function_<Internal.Entity, any>)
        /**
         * Sets the swim sound for the entity using a string representation.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSound("minecraft:entity.generic.swim");
         * ```
        */
        set swimSound(sound: any)
        /**
         * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
         * ```
        */
        set swimSplashSound(sound: any)
    }
    type PartBuilder_<T extends Internal.LivingEntity> = PartBuilder<T>;
    class NoiseChunk$NoiseInterpolator implements Internal.DensityFunctions$MarkerOrMarked, Internal.NoiseChunk$NoiseChunkDensityFunction {
        constructor(arg0: Internal.NoiseChunk_, arg1: Internal.DensityFunction_)
        abs(): Internal.DensityFunction;
        halfNegative(): Internal.DensityFunction;
        maxValue(): number;
        codec(): Internal.KeyDispatchDataCodec<Internal.DensityFunction>;
        selectCellYZ(arg0: number, arg1: number): void;
        compute(arg0: Internal.DensityFunction$FunctionContext_): number;
        squeeze(): Internal.DensityFunction;
        square(): Internal.DensityFunction;
        mapAll(arg0: Internal.DensityFunction$Visitor_): Internal.DensityFunction;
        clamp(arg0: number, arg1: number): Internal.DensityFunction;
        updateForZ(arg0: number): void;
        updateForY(arg0: number): void;
        updateForX(arg0: number): void;
        wrapped(): Internal.DensityFunction;
        quarterNegative(): Internal.DensityFunction;
        type(): Internal.DensityFunctions$Marker$Type;
        cube(): Internal.DensityFunction;
        fillArray(arg0: number[], arg1: Internal.DensityFunction$ContextProvider_): void;
        minValue(): number;
        readonly f_188827_: Internal.NoiseChunk;
        slice0: number[][];
        slice1: number[][];
    }
    type NoiseChunk$NoiseInterpolator_ = NoiseChunk$NoiseInterpolator;
    class InventoryCondition extends Internal.EntityCondition<any> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type InventoryCondition_ = InventoryCondition;
    class BlockInfo implements com.lowdragmc.lowdraglib.gui.editor.configurator.IConfigurable, Internal.IPersistedSerializable {
        constructor()
        constructor(blockState: Internal.BlockState_, hasBlockEntity: boolean, itemStack: Internal.ItemStack_, postCreate: Internal.Consumer_<Internal.BlockEntity>)
        constructor(blockState: Internal.BlockState_, postCreate: Internal.Consumer_<Internal.BlockEntity>)
        constructor(blockState: Internal.BlockState_, hasBlockEntity: boolean)
        constructor(blockState: Internal.BlockState_)
        constructor(block: Internal.Block_)
        clearBlockEntityCache(): void;
        setTag(tag: Internal.CompoundTag_): void;
        getTranslateKey(): string;
        setPostCreate(postCreate: Internal.Consumer_<Internal.BlockEntity>): void;
        hasBlockEntity(): boolean;
        setBlockState(blockState: Internal.BlockState_): void;
        serializeNBT(): Internal.Tag;
        getChatComponent(): Internal.Component;
        getBlockEntity(pos: BlockPos_): Internal.BlockEntity;
        setHasBlockEntity(hasBlockEntity: boolean): void;
        getItemStackForm(): Internal.ItemStack;
        static fromBlock(block: Internal.Block_): Internal.BlockInfo;
        getBlockEntity(level: Internal.Level_, pos: BlockPos_): Internal.BlockEntity;
        apply(world: Internal.Level_, pos: BlockPos_): void;
        isLDLRegister(): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getBlockState(): Internal.BlockState;
        buildConfigurator(father: Internal.ConfiguratorGroup_): void;
        name(): string;
        deserializeNBT(tag: Internal.CompoundTag_): void;
        getItemStackForm(level: Internal.BlockAndTintGetter_, pos: BlockPos_): Internal.ItemStack;
        static fromBlockState(state: Internal.BlockState_): Internal.BlockInfo;
        setItemStack(itemStack: Internal.ItemStack_): void;
        getRegisterUI(): Internal.LDLRegister;
        group(): string;
        set tag(tag: Internal.CompoundTag_)
        get translateKey(): string
        set postCreate(postCreate: Internal.Consumer_<Internal.BlockEntity>)
        set blockState(blockState: Internal.BlockState_)
        get chatComponent(): Internal.Component
        set hasBlockEntity(hasBlockEntity: boolean)
        get itemStackForm(): Internal.ItemStack
        get LDLRegister(): boolean
        get blockState(): Internal.BlockState
        set itemStack(itemStack: Internal.ItemStack_)
        get registerUI(): Internal.LDLRegister
        static readonly EMPTY: Internal.BlockInfo;
    }
    type BlockInfo_ = BlockInfo;
    interface TickAccess <T> {
        abstract count(): number;
        abstract schedule(arg0: Internal.ScheduledTick_<T>): void;
        abstract hasScheduledTick(arg0: BlockPos_, arg1: T): boolean;
    }
    type TickAccess_<T> = TickAccess<T>;
    class NewRegistryEvent extends Internal.Event implements Internal.IModBusEvent {
        constructor()
        create<V>(arg0: Internal.RegistryBuilder_<V>): Internal.Supplier<Internal.IForgeRegistry<V>>;
        create<V>(arg0: Internal.RegistryBuilder_<V>, arg1: Internal.Consumer_<Internal.IForgeRegistry<V>>): Internal.Supplier<Internal.IForgeRegistry<V>>;
    }
    type NewRegistryEvent_ = NewRegistryEvent;
    interface Quaterniondc {
        abstract rotateTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformInverse(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract mul(arg0: Internal.Quaterniondc_, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformPositiveY(arg0: Vector3f_): Vector3f;
        abstract transformPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformUnit(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract transformUnit(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract transformInverse(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract get(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transform(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformUnitPositiveZ(arg0: Vector3f_): Vector3f;
        abstract transformUnitPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract x(): number;
        abstract transformUnit(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract mul(arg0: number, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformInverse(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformPositiveY(arg0: Vec4f_): Vec4f;
        abstract transformPositiveX(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract dot(arg0: Internal.Quaterniondc_): number;
        abstract rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Quaterniond_): Internal.Quaterniond;
        abstract premul(arg0: Internal.Quaterniondc_, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformUnit(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        abstract rotateY(arg0: number, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformUnit(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract transformInverseUnit(arg0: Vector3f_): Vector3f;
        abstract transformInverse(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        abstract positiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transform(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract get(arg0: Quaternionf_): Quaternionf;
        abstract transformUnitPositiveX(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transformUnitPositiveY(arg0: Vec4f_): Vec4f;
        abstract div(arg0: Internal.Quaterniondc_, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract rotateTo(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract angle(): number;
        abstract transformPositiveZ(arg0: Vector3f_): Vector3f;
        abstract transformUnit(arg0: Vec4f_): Vec4f;
        abstract transformUnit(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract transformInverseUnit(arg0: Vec4f_): Vec4f;
        abstract transformInverse(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract get(arg0: Matrix4f_): Matrix4f;
        abstract conjugate(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transform(arg0: Vec4f_): Vec4f;
        abstract transformUnit(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract transformInverseUnit(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract transformUnitPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformUnitPositiveY(arg0: Vector3f_): Vector3f;
        abstract transformInverseUnit(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract y(): number;
        abstract lengthSquared(): number;
        abstract get(arg0: Internal.AxisAngle4f_): Internal.AxisAngle4f;
        abstract transformPositiveY(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transform(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        abstract normalizedPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformPositiveZ(arg0: Vec4f_): Vec4f;
        abstract transformUnit(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transform(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract getEulerAnglesZYX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformInverse(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateZ(arg0: number, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformInverse(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract transformUnit(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        abstract transformInverseUnit(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformInverse(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniond_): Internal.Quaterniond;
        abstract get(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        abstract transform(arg0: Vector3f_): Vector3f;
        abstract positiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        abstract transformUnitPositiveX(arg0: Vec4f_): Vec4f;
        abstract rotateLocalZ(arg0: number, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract getEulerAnglesZXY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Vec4f_): Vec4f;
        abstract transformPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateAxis(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformInverseUnit(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract z(): number;
        abstract nlerp(arg0: Internal.Quaterniondc_, arg1: number, arg2: Internal.Quaterniond_): Internal.Quaterniond;
        abstract isFinite(): boolean;
        abstract nlerpIterative(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformUnitPositiveX(arg0: Vector3f_): Vector3f;
        abstract equals(arg0: Internal.Quaterniondc_, arg1: number): boolean;
        abstract normalize(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract get(arg0: Internal.AxisAngle4d_): Internal.AxisAngle4d;
        abstract rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniond_): Internal.Quaterniond;
        abstract normalizedPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract transformPositiveZ(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transformUnit(arg0: Vector3f_): Vector3f;
        abstract conjugateBy(arg0: Internal.Quaterniondc_, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformInverseUnit(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract transformInverseUnit(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract get(arg0: Matrix3f_): Matrix3f;
        abstract rotateLocalY(arg0: number, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformUnitPositiveZ(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract transformInverse(arg0: Vec4f_): Vec4f;
        abstract premul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformPositiveX(arg0: Vector3f_): Vector3f;
        abstract transformInverseUnit(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract transform(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract getEulerAnglesXYZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract transformUnit(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector4d_): Internal.Vector4d;
        abstract add(arg0: Internal.Quaterniondc_, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transform(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract difference(arg0: Internal.Quaterniondc_, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformUnitPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract slerp(arg0: Internal.Quaterniondc_, arg1: number, arg2: Internal.Quaterniond_): Internal.Quaterniond;
        abstract w(): number;
        abstract transformInverse(arg0: Vector3f_): Vector3f;
        abstract transformInverse(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract normalizedPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformPositiveX(arg0: Vec4f_): Vec4f;
        abstract rotateX(arg0: number, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract invert(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract integrate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Quaterniond_): Internal.Quaterniond;
        abstract lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateLocalX(arg0: number, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract getEulerAnglesYXZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract positiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformUnitPositiveZ(arg0: Vec4f_): Vec4f;
        abstract get(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformInverse(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract scale(arg0: number, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformUnitPositiveY(arg0: Internal.Vector4d_): Internal.Vector4d;
        get finite(): boolean
    }
    type Quaterniondc_ = Quaterniondc;
    class Cursed_Pyramid_Structure extends Internal.CataclysmStructure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static readonly CODEC: Internal.Codec<Internal.Cursed_Pyramid_Structure>;
    }
    type Cursed_Pyramid_Structure_ = Cursed_Pyramid_Structure;
    class RegistryAccess$ImmutableRegistryAccess implements Internal.RegistryAccess {
        constructor(arg0: Internal.Map_<Internal.ResourceKey<Internal.Registry<any>>, Internal.Registry<any>>)
        constructor(arg0: Internal.List_<Internal.Registry<any>>)
        constructor(arg0: Internal.Stream_<Internal.RegistryAccess$RegistryEntry<any>>)
        lookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.Optional<Internal.HolderLookup$RegistryLookup<T>>;
        allRegistriesLifecycle(): Internal.Lifecycle;
        static create(arg0: Internal.Stream_<Internal.HolderLookup$RegistryLookup<any>>): Internal.HolderLookup$Provider;
        registry<E>(arg0: Internal.ResourceKey_<Internal.Registry<E>>): Internal.Optional<Internal.Registry<E>>;
        lookupOrThrow<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup$RegistryLookup<T>;
        registryOrThrow<E>(arg0: Internal.ResourceKey_<Internal.Registry<E>>): Internal.Registry<E>;
        registries(): Internal.Stream<Internal.RegistryAccess$RegistryEntry<any>>;
        freeze(): Internal.RegistryAccess$Frozen;
        asGetterLookup(): Internal.HolderGetter$Provider;
        static fromRegistryOfRegistries(arg0: Internal.Registry_<Internal.Registry<any>>): Internal.RegistryAccess$Frozen;
    }
    type RegistryAccess$ImmutableRegistryAccess_ = RegistryAccess$ImmutableRegistryAccess;
    class SyncedSpellData {
        constructor(arg0: number)
        constructor(arg0: Internal.LivingEntity_)
        getServerPlayerId(): number;
        hasDodgeEffect(): boolean;
        addHeartstopDamage(arg0: number): void;
        isCasting(): boolean;
        removeEffects(arg0: number): void;
        doSync(): void;
        getSpellSelection(): Internal.SpellSelection;
        getSpinAttackType(): Internal.SpinAttackType;
        hasEffect(arg0: number): boolean;
        getEvasionHitsRemaining(): number;
        addLocalEffect(arg0: number): void;
        getPersistentData(): this;
        getCastingSpellLevel(): number;
        syncToPlayer(arg0: Internal.ServerPlayer_): void;
        loadNBTData(arg0: Internal.CompoundTag_): void;
        setSpinAttackType(arg0: Internal.SpinAttackType_): void;
        removeLocalEffect(arg0: number): void;
        setHeartstopAccumulatedDamage(arg0: number): void;
        hasLocalEffect(arg0: number): boolean;
        addEffects(arg0: number): void;
        getCastingSpellId(): string;
        getHeartstopAccumulatedDamage(): number;
        isSpellLearned(arg0: Internal.AbstractSpell_): boolean;
        saveNBTData(arg0: Internal.CompoundTag_): void;
        subtractEvasionHit(): void;
        setEvasionHitsRemaining(arg0: number): void;
        forgetAllSpells(): void;
        getCastingEquipmentSlot(): string;
        setIsCasting(arg0: boolean, arg1: string, arg2: number, arg3: string): void;
        setSpellSelection(arg0: Internal.SpellSelection_): void;
        learnSpell(arg0: Internal.AbstractSpell_): void;
        get serverPlayerId(): number
        get casting(): boolean
        get spellSelection(): Internal.SpellSelection
        get spinAttackType(): Internal.SpinAttackType
        get evasionHitsRemaining(): number
        get persistentData(): Internal.SyncedSpellData
        get castingSpellLevel(): number
        set spinAttackType(arg0: Internal.SpinAttackType_)
        set heartstopAccumulatedDamage(arg0: number)
        get castingSpellId(): string
        get heartstopAccumulatedDamage(): number
        set evasionHitsRemaining(arg0: number)
        get castingEquipmentSlot(): string
        set spellSelection(arg0: Internal.SpellSelection_)
        static readonly TRUE_INVIS: 32;
        static readonly HEARTSTOP: 4;
        static readonly SYNCED_SPELL_DATA: Internal.EntityDataSerializer<Internal.SyncedSpellData>;
        static readonly ANGEL_WINGS: 1;
        static readonly PLANAR_SIGHT: 128;
        static readonly HEAL_TARGET: 1;
        static readonly ABYSSAL_SHROUD: 8;
        static readonly EVASION: 2;
        static readonly ASCENSION: 16;
        static readonly CHARGED: 64;
    }
    type SyncedSpellData_ = SyncedSpellData;
    class StackingStatusEffectPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.StackingStatusEffectConfiguration> {
        constructor()
        applyEffects(arg0: Internal.ConfiguredPower_<Internal.StackingStatusEffectConfiguration, any>, arg1: Internal.Entity_): void;
        getCurrentStacks(arg0: Internal.ConfiguredPower_<Internal.StackingStatusEffectConfiguration, any>, arg1: Internal.IPowerContainer_): Internal.AtomicInteger;
        getCurrentStacks(arg0: Internal.ConfiguredPower_<Internal.StackingStatusEffectConfiguration, any>, arg1: Internal.Entity_): Internal.AtomicInteger;
    }
    type StackingStatusEffectPower_ = StackingStatusEffectPower;
    class MatchingFluidsPredicate extends Internal.StateTestingPredicate {
        constructor(arg0: Vec3i_, arg1: Internal.HolderSet_<Internal.Fluid>)
        static hasSturdyFace(arg0: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        and(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Vec3i_, arg1: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        negate(): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static solid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static insideWorld(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        or(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static solid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static alwaysTrue(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static replaceable(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static wouldSurvive(arg0: Internal.BlockState_, arg1: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static not(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static replaceable(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Vec3i_, arg1: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(...arg0: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static readonly CODEC: Internal.Codec<Internal.MatchingFluidsPredicate>;
    }
    type MatchingFluidsPredicate_ = MatchingFluidsPredicate;
    interface LayoutElement {
        abstract getX(): number;
        abstract getWidth(): number;
        abstract getY(): number;
        abstract setY(arg0: number): void;
        setPosition(arg0: number, arg1: number): void;
        abstract setX(arg0: number): void;
        abstract getHeight(): number;
        abstract visitWidgets(arg0: Internal.Consumer_<Internal.AbstractWidget>): void;
        getRectangle(): Internal.ScreenRectangle;
        get x(): number
        get width(): number
        get y(): number
        set y(arg0: number)
        set x(arg0: number)
        get height(): number
        get rectangle(): Internal.ScreenRectangle
    }
    type LayoutElement_ = LayoutElement;
    interface Object2ObjectSortedMap <K, V> extends Internal.SortedMap<K, V>, Internal.Object2ObjectMap<K, V> {
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, V>): V;
        abstract containsValue(arg0: any): boolean;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2ObjectFunction<V>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        abstract comparator(): Internal.Comparator<K>;
        computeIfAbsent(arg0: K, arg1: Internal.Object2ObjectFunction_<K, V>): V;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Object2FloatFunction<K>;
        abstract get(arg0: any): V;
        copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2ObjectFunction<V>;
        subMap(arg0: any, arg1: any): Internal.SortedMap<any, any>;
        putIfAbsent(arg0: K, arg1: V): V;
        entrySet(): Internal.Set<any>;
        apply(arg0: K): V;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Object2ReferenceFunction<K, T>;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2ObjectFunction<V>;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Object2DoubleFunction<K>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2ObjectFunction<V>;
        /**
         * @deprecated
        */
        computeObjectIfAbsentPartial(arg0: K, arg1: Internal.Object2ObjectFunction_<K, V>): V;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Object2CharFunction<K>;
        ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        abstract defaultReturnValue(): V;
        identity<T>(): Internal.Function<T, T>;
        abstract defaultReturnValue(arg0: V): void;
        of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        replace(arg0: K, arg1: V): V;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<K, V>;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        of<K, V>(): Internal.Map<K, V>;
        getOrDefault(arg0: any, arg1: V): V;
        object2ObjectEntrySet(): Internal.ObjectSet<any>;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2ObjectFunction<V>;
        abstract isEmpty(): boolean;
        entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        abstract containsKey(arg0: any): boolean;
        put(arg0: K, arg1: V): V;
        remove(arg0: any): V;
        merge(arg0: K, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        abstract tailMap(arg0: K): this;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Object2LongFunction<K>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Object2ShortFunction<K>;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Object2IntFunction<K>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2ObjectFunction<V>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        abstract headMap(arg0: K): this;
        remove(arg0: any, arg1: any): boolean;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2ObjectFunction<T, V>;
        keySet(): Internal.ObjectSet<any>;
        abstract putAll(arg0: Internal.Map_<K, V>): void;
        abstract values(): Internal.ObjectCollection<V>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Object2ByteFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2ObjectFunction<T, V>;
        abstract lastKey(): K;
        abstract size(): number;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2ObjectFunction<V>;
        abstract hashCode(): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, V>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Object2ObjectFunction<K, T>;
        replaceAll(arg0: Internal.BiFunction_<K, V, V>): void;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        abstract equals(arg0: any): boolean;
        abstract firstKey(): K;
        get empty(): boolean
    }
    type Object2ObjectSortedMap_<K, V> = Object2ObjectSortedMap<K, V>;
    class AmberMonolithBlock extends Internal.BaseEntityBlock {
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
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
    type AmberMonolithBlock_ = AmberMonolithBlock;
    class ContextUtils$MayInteractContext {
        constructor(level: Internal.Level_, pos: BlockPos_, entity: Internal.LivingEntity_)
        /**
         * The position where the interaction may occur
        */
        readonly pos: BlockPos;
        /**
         * The level where the interaction may occur
        */
        readonly level: Internal.Level;
        /**
         * The living entity involved in the interaction
        */
        readonly entity: Internal.LivingEntity;
    }
    type ContextUtils$MayInteractContext_ = ContextUtils$MayInteractContext;
    class TextureManager implements Internal.Tickable, Internal.PreparableReloadListener, Internal.AutoCloseable, Internal.IdentifiableResourceReloadListener {
        constructor(arg0: Internal.ResourceManager_)
        bindForSetup(arg0: ResourceLocation_): void;
        getTexture(arg0: ResourceLocation_, arg1: Internal.AbstractTexture_): Internal.AbstractTexture;
        release(arg0: ResourceLocation_): void;
        getFabricDependencies(): Internal.Collection<any>;
        tick(): void;
        close(): void;
        getName(): string;
        register(arg0: ResourceLocation_, arg1: Internal.AbstractTexture_): void;
        getTexture(arg0: ResourceLocation_): Internal.AbstractTexture;
        register(arg0: string, arg1: Internal.DynamicTexture_): ResourceLocation;
        preload(arg0: ResourceLocation_, arg1: Internal.Executor_): Internal.CompletableFuture<void>;
        dumpAllSheets(arg0: Internal.Path_): void;
        getFabricId(): ResourceLocation;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get fabricDependencies(): Internal.Collection<any>
        get name(): string
        get fabricId(): ResourceLocation
        static readonly INTENTIONAL_MISSING_TEXTURE: ResourceLocation;
        readonly byPath: Internal.Map<ResourceLocation, Internal.AbstractTexture>;
    }
    type TextureManager_ = TextureManager;
    interface ObjectSet <K> extends Internal.Set<K>, Internal.ObjectCollection<K> {
        abstract addAll(arg0: Internal.Collection_<K>): boolean;
        of<K>(arg0: K, arg1: K, arg2: K): this;
        abstract isEmpty(): boolean;
        of<K>(arg0: K, arg1: K): this;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        parallelStream(): Internal.Stream<K>;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        abstract contains(arg0: any): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        iterator(): Internal.Iterator<any>;
        abstract toArray<T>(arg0: T[]): T[];
        forEach(arg0: Internal.Consumer_<K>): void;
        abstract remove(arg0: any): boolean;
        abstract toArray(): any[];
        removeIf(arg0: Internal.Predicate_<K>): boolean;
        of<K>(): this;
        abstract hashCode(): number;
        abstract size(): number;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        spliterator(): Internal.Spliterator<any>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        of<K>(...arg0: K[]): this;
        abstract clear(): void;
        of<K>(arg0: K): this;
        abstract equals(arg0: any): boolean;
        copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        abstract add(arg0: K): boolean;
        stream(): Internal.Stream<K>;
        get empty(): boolean
    }
    type ObjectSet_<K> = ObjectSet<K>;
    class FrostmintSpearItem extends Internal.SpearItem {
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
    type FrostmintSpearItem_ = FrostmintSpearItem;
    class FireworkStarItem extends Internal.Item {
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
        static appendHoverText(arg0: Internal.CompoundTag_, arg1: Internal.List_<Internal.Component>): void;
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
    type FireworkStarItem_ = FireworkStarItem;
    class ClimbingConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(allowHolding: boolean, condition: Internal.Holder_<Internal.ConfiguredEntityCondition<any, any>>)
        isConfigurationValid(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        condition(): Internal.Holder<Internal.ConfiguredEntityCondition<any, any>>;
        name(): string;
        allowHolding(): boolean;
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
        static readonly CODEC: Internal.Codec<Internal.ClimbingConfiguration>;
    }
    type ClimbingConfiguration_ = ClimbingConfiguration;
    abstract class GrowingPlantBodyBlock extends Internal.GrowingPlantBlock implements Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.Direction_, arg2: Internal.VoxelShape_, arg3: boolean)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
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
        updateHeadAfterConvertedFromBody(arg0: Internal.BlockState_, arg1: Internal.BlockState_): Internal.BlockState;
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
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
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
    type GrowingPlantBodyBlock_ = GrowingPlantBodyBlock;
    class DesertPyramidStructure extends Internal.SinglePieceStructure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static readonly CODEC: Internal.Codec<Internal.DesertPyramidStructure>;
    }
    type DesertPyramidStructure_ = DesertPyramidStructure;
    interface GameRendererAccess {
        abstract callGetFov(arg0: Internal.Camera_, arg1: number, arg2: boolean): number;
        (arg0: Internal.Camera, arg1: number, arg2: boolean): number;
    }
    type GameRendererAccess_ = GameRendererAccess;
    class DraggableScrollableWidgetGroup$ScrollWheelDirection extends Internal.Enum<Internal.DraggableScrollableWidgetGroup$ScrollWheelDirection> {
        static values(): Internal.DraggableScrollableWidgetGroup$ScrollWheelDirection[];
        static valueOf(name: string): Internal.DraggableScrollableWidgetGroup$ScrollWheelDirection;
        static readonly VERTICAL: Internal.DraggableScrollableWidgetGroup$ScrollWheelDirection;
        static readonly HORIZONTAL: Internal.DraggableScrollableWidgetGroup$ScrollWheelDirection;
    }
    type DraggableScrollableWidgetGroup$ScrollWheelDirection_ = DraggableScrollableWidgetGroup$ScrollWheelDirection | "vertical" | "horizontal";
    class ItemCitadelDebug extends Internal.Item {
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
    type ItemCitadelDebug_ = ItemCitadelDebug;
    interface FileStoreAttributeView extends Internal.AttributeView {
        abstract name(): string;
        (): string;
    }
    type FileStoreAttributeView_ = FileStoreAttributeView;
    interface ExtendingBufferBuilder {
        abstract iris$beginWithoutExtending(arg0: Internal.VertexFormat$Mode_, arg1: Internal.VertexFormat_): void;
        (arg0: Internal.VertexFormat$Mode, arg1: Internal.VertexFormat): void;
    }
    type ExtendingBufferBuilder_ = ExtendingBufferBuilder;
    class RenderStateShard$TransparencyStateShard extends Internal.RenderStateShard {
        constructor(arg0: string, arg1: Internal.Runnable_, arg2: Internal.Runnable_)
        static getTranslucentTransparency(): Internal.RenderStateShard$TransparencyStateShard;
        static getGLINT_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        static getCRUMBLING_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        static getNO_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        get translucentTransparency(): Internal.RenderStateShard$TransparencyStateShard
        get GLINT_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
        get CRUMBLING_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
        get NO_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
    }
    type RenderStateShard$TransparencyStateShard_ = RenderStateShard$TransparencyStateShard;
    class MerchantOffers extends Internal.ArrayList<Internal.MerchantOffer> {
        constructor()
        constructor(arg0: Internal.CompoundTag_)
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        getRecipeFor(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: number): Internal.MerchantOffer;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        parallelStream(): Internal.Stream<Internal.MerchantOffer>;
        createTag(): Internal.CompoundTag;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        stream(): Internal.Stream<Internal.MerchantOffer>;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        static of<E>(...arg0: E[]): Internal.List<E>;
        writeToStream(arg0: Internal.FriendlyByteBuf_): void;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        static createFromStream(arg0: Internal.FriendlyByteBuf_): Internal.MerchantOffers;
    }
    type MerchantOffers_ = MerchantOffers;
    class NetherrackBlock extends Internal.Block implements Internal.BonemealableBlock {
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
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
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
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
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
    type NetherrackBlock_ = NetherrackBlock;
    class RegistryInfo <T> implements Internal.Iterable<Internal.BuilderBase<T>>, Internal.TypeWrapperFactory<T> {
        forEach(arg0: Internal.Consumer_<Internal.BuilderBase<T>>): void;
        addType(type: string, builderType: Internal.BuilderBase<T>, factory: Internal.BuilderFactory_, isDefault: boolean): void;
        iterator(): Internal.Iterator<Internal.BuilderBase<T>>;
        getId(value: T): ResourceLocation;
        addType(type: string, builderType: Internal.BuilderBase<T>, factory: Internal.BuilderFactory_): void;
        wrap(cx: Internal.Context_, o: any): T;
        languageKeyPrefix(prefix: string): this;
        getDefaultType(): Internal.BuilderType<any>;
        fireRegistryEvent(): void;
        bypassServerOnly(): this;
        noAutoWrap(): this;
        addBuilder(builder: Internal.BuilderBase_<T>): void;
        hasValue(id: ResourceLocation_): boolean;
        getValue(id: ResourceLocation_): T;
        static of(key: Internal.ResourceKey_<Internal.Registry<any>>): Internal.RegistryInfo<any>;
        entrySet(): Internal.Set<Internal.Map$Entry<Internal.ResourceKey<T>, T>>;
        static of<T>(key: Internal.ResourceKey_<Internal.Registry<any>>, type: T): Internal.RegistryInfo<T>;
        getVanillaRegistry(): Internal.Registry<T>;
        getArchitecturyRegistrar(): Internal.Registrar<T>;
        registerObjects(function_: Internal.RegistryCallback_<T>): number;
        spliterator(): Internal.Spliterator<Internal.BuilderBase<T>>;
        get defaultType(): Internal.BuilderType<any>
        get vanillaRegistry(): Internal.Registry<T>
        get architecturyRegistrar(): Internal.Registrar<T>
        static readonly STRUCTURE_SET: Internal.RegistryInfo<Internal.StructureSet>;
        static readonly AFTER_VANILLA: [];
        static readonly LOOT_SCORE_PROVIDER_TYPE: Internal.RegistryInfo<Internal.LootScoreProviderType>;
        static readonly RULE: Internal.RegistryInfo<Internal.Codec<any>>;
        static readonly DECORATED_POT_PATTERNS: Internal.RegistryInfo<string>;
        static readonly FLAT_LEVEL_GENERATOR_PRESET: Internal.RegistryInfo<Internal.FlatLevelGeneratorPreset>;
        static readonly LOOT_FUNCTION_TYPE: Internal.RegistryInfo<Internal.LootItemFunctionType>;
        static readonly RECIPE_SERIALIZER: Internal.RegistryInfo<Internal.RecipeSerializer<any>>;
        static readonly VILLAGER_PROFESSION: Internal.RegistryInfo<Internal.VillagerProfession>;
        static readonly LOOT_NBT_PROVIDER_TYPE: Internal.RegistryInfo<Internal.LootNbtProviderType>;
        static readonly ACTIVITY: Internal.RegistryInfo<Internal.Activity>;
        static readonly BLOCK: Internal.RegistryInfo<Internal.Block>;
        static readonly ENCHANTMENT: Internal.RegistryInfo<Internal.Enchantment>;
        static readonly FROG_VARIANT: Internal.RegistryInfo<Internal.FrogVariant>;
        static readonly MAP: {[key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>, [key: Internal.ResourceKey<any>]: Internal.RegistryInfo<any>};
        static readonly STRUCTURE_PLACEMENT_TYPE: Internal.RegistryInfo<Internal.StructurePlacementType<any>>;
        static readonly BANNER_PATTERN: Internal.RegistryInfo<Internal.BannerPattern>;
        static readonly STRUCTURE_PIECE: Internal.RegistryInfo<Internal.StructurePieceType>;
        static readonly BLOCK_PREDICATE_TYPE: Internal.RegistryInfo<Internal.BlockPredicateType<any>>;
        static readonly ENTITY_TYPE: Internal.RegistryInfo<Internal.EntityType<any>>;
        static readonly ITEM: Internal.RegistryInfo<Internal.Item>;
        static readonly LOOT_SCORE_PROVIDER: Internal.RegistryInfo<Internal.LootScoreProviderType>;
        static readonly PLACEMENT_MODIFIER_TYPE: Internal.RegistryInfo<Internal.PlacementModifierType<any>>;
        static readonly PROCESSOR_LIST: Internal.RegistryInfo<Internal.StructureProcessorList>;
        static readonly NOISE: Internal.RegistryInfo<Internal.NormalNoise$NoiseParameters>;
        hasDefaultTags: boolean;
        static readonly SOUND_EVENT: Internal.RegistryInfo<Internal.SoundEvent>;
        static readonly FLOAT_PROVIDER_TYPE: Internal.RegistryInfo<Internal.FloatProviderType<any>>;
        static readonly SENSOR_TYPE: Internal.RegistryInfo<Internal.SensorType<any>>;
        static readonly VILLAGER_TYPE: Internal.RegistryInfo<Internal.VillagerType>;
        static readonly MATERIAL_RULE: Internal.RegistryInfo<Internal.Codec<any>>;
        static readonly BIOME_SOURCE: Internal.RegistryInfo<Internal.Codec<any>>;
        static readonly STRUCTURE: Internal.RegistryInfo<Internal.Structure>;
        static readonly INSTRUMENT: Internal.RegistryInfo<Internal.Instrument>;
        static readonly FLUID: Internal.RegistryInfo<Internal.Fluid>;
        static readonly POSITION_SOURCE_TYPE: Internal.RegistryInfo<Internal.PositionSourceType<any>>;
        static readonly STAT_TYPE: Internal.RegistryInfo<Internal.StatType<any>>;
        static readonly TEMPLATE_POOL: Internal.RegistryInfo<Internal.StructureTemplatePool>;
        readonly objectBaseClass: typeof any;
        static readonly GAME_EVENT: Internal.RegistryInfo<Internal.GameEvent>;
        static readonly MENU: Internal.RegistryInfo<Internal.MenuType<any>>;
        static readonly COMMAND_ARGUMENT_TYPE: Internal.RegistryInfo<Internal.ArgumentTypeInfo<any, any>>;
        static readonly STRUCTURE_POOL_ELEMENT: Internal.RegistryInfo<Internal.StructurePoolElementType<any>>;
        static readonly LOOT_NUMBER_PROVIDER_TYPE: Internal.RegistryInfo<Internal.LootNumberProviderType>;
        static readonly LOOT_NUMBER_PROVIDER: Internal.RegistryInfo<Internal.LootNumberProviderType>;
        static readonly STRUCTURE_PLACEMENT: Internal.RegistryInfo<Internal.StructurePlacementType<any>>;
        readonly key: Internal.ResourceKey<Internal.Registry<T>>;
        static readonly BLOCK_STATE_PROVIDER_TYPE: Internal.RegistryInfo<Internal.BlockStateProviderType<any>>;
        static readonly POTION: Internal.RegistryInfo<Internal.Potion>;
        static readonly CUSTOM_STAT: Internal.RegistryInfo<ResourceLocation>;
        static readonly CONDITION: Internal.RegistryInfo<Internal.Codec<any>>;
        readonly objects: Internal.Map<ResourceLocation, Internal.BuilderBase<T>>;
        static readonly INT_PROVIDER_TYPE: Internal.RegistryInfo<Internal.IntProviderType<any>>;
        static readonly CHUNK_GENERATOR: Internal.RegistryInfo<Internal.Codec<any>>;
        static readonly CAT_VARIANT: Internal.RegistryInfo<Internal.CatVariant>;
        static readonly TRIM_MATERIAL: Internal.RegistryInfo<Internal.TrimMaterial>;
        static readonly LOOT_CONDITION_TYPE: Internal.RegistryInfo<Internal.LootItemConditionType>;
        bypassServerOnly: boolean;
        static readonly CREATIVE_MODE_TAB: Internal.RegistryInfo<Internal.CreativeModeTab>;
        static readonly CONFIGURED_FEATURE: Internal.RegistryInfo<Internal.ConfiguredFeature<any, any>>;
        static readonly FEATURE: Internal.RegistryInfo<Internal.Feature<any>>;
        static readonly DAMAGE_TYPE: Internal.RegistryInfo<Internal.DamageType>;
        static readonly MATERIAL_CONDITION: Internal.RegistryInfo<Internal.Codec<any>>;
        static readonly TRUNK_PLACER_TYPE: Internal.RegistryInfo<Internal.TrunkPlacerType<any>>;
        static readonly DENSITY_FUNCTION: Internal.RegistryInfo<Internal.DensityFunction>;
        static readonly PAINTING_VARIANT: Internal.RegistryInfo<Internal.PaintingVariant>;
        static readonly LOOT_FUNCTION: Internal.RegistryInfo<Internal.LootItemFunctionType>;
        static readonly DIMENSION_TYPE: Internal.RegistryInfo<Internal.DimensionType>;
        static readonly LOOT_ENTRY: Internal.RegistryInfo<Internal.LootPoolEntryType>;
        static readonly MOB_EFFECT: Internal.RegistryInfo<Internal.MobEffect>;
        static readonly PLACEMENT_MODIFIER: Internal.RegistryInfo<Internal.PlacementModifierType<any>>;
        static readonly FEATURE_SIZE_TYPE: Internal.RegistryInfo<Internal.FeatureSizeType<any>>;
        static readonly SCHEDULE: Internal.RegistryInfo<Internal.Schedule>;
        static readonly HEIGHT_PROVIDER_TYPE: Internal.RegistryInfo<Internal.HeightProviderType<any>>;
        static readonly DIMENSION: Internal.RegistryInfo<Internal.Level>;
        static readonly NOISE_GENERATOR_SETTINGS: Internal.RegistryInfo<Internal.NoiseGeneratorSettings>;
        static readonly POS_RULE_TEST: Internal.RegistryInfo<Internal.PosRuleTestType<any>>;
        static readonly LOOT_NBT_PROVIDER: Internal.RegistryInfo<Internal.LootNbtProviderType>;
        static readonly CONFIGURED_CARVER: Internal.RegistryInfo<Internal.ConfiguredWorldCarver<any>>;
        static readonly WORLD_PRESET: Internal.RegistryInfo<Internal.WorldPreset>;
        static readonly LEVEL_STEM: Internal.RegistryInfo<Internal.LevelStem>;
        readonly types: Internal.Map<string, Internal.BuilderType<T>>;
        static readonly TREE_DECORATOR_TYPE: Internal.RegistryInfo<Internal.TreeDecoratorType<any>>;
        static readonly RECIPE_TYPE: Internal.RegistryInfo<Internal.RecipeType<any>>;
        static readonly MEMORY_MODULE_TYPE: Internal.RegistryInfo<Internal.MemoryModuleType<any>>;
        static readonly STRUCTURE_PROCESSOR: Internal.RegistryInfo<Internal.StructureProcessorType<any>>;
        static readonly STRUCTURE_TYPE: Internal.RegistryInfo<Internal.StructureType<any>>;
        static readonly DENSITY_FUNCTION_TYPE: Internal.RegistryInfo<Internal.Codec<any>>;
        static readonly ALL_BUILDERS: [];
        static readonly TRIM_PATTERN: Internal.RegistryInfo<Internal.TrimPattern>;
        static readonly FOLIAGE_PLACER_TYPE: Internal.RegistryInfo<Internal.FoliagePlacerType<any>>;
        static readonly CHAT_TYPE: Internal.RegistryInfo<Internal.ChatType>;
        static readonly NOISE_SETTINGS: Internal.RegistryInfo<Internal.NoiseGeneratorSettings>;
        autoWrap: boolean;
        static readonly ROOT_PLACER_TYPE: Internal.RegistryInfo<Internal.RootPlacerType<any>>;
        static readonly POINT_OF_INTEREST_TYPE: Internal.RegistryInfo<Internal.PoiType>;
        static readonly BIOME: Internal.RegistryInfo<Internal.Biome>;
        static readonly LOOT_ITEM: Internal.RegistryInfo<Internal.LootItemConditionType>;
        static readonly LOOT_POOL_ENTRY_TYPE: Internal.RegistryInfo<Internal.LootPoolEntryType>;
        static readonly MULTI_NOISE_BIOME_SOURCE_PARAMETER_LIST: Internal.RegistryInfo<Internal.MultiNoiseBiomeSourceParameterList>;
        languageKeyPrefix: string;
        static readonly PLACED_FEATURE: Internal.RegistryInfo<Internal.PlacedFeature>;
        static readonly CARVER: Internal.RegistryInfo<Internal.WorldCarver<any>>;
        static readonly BLOCK_ENTITY_TYPE: Internal.RegistryInfo<Internal.BlockEntityType<any>>;
        static readonly ATTRIBUTE: Internal.RegistryInfo<Internal.Attribute>;
        static readonly PARTICLE_TYPE: Internal.RegistryInfo<Internal.ParticleType<any>>;
        static readonly RULE_BLOCK_ENTITY_MODIFIER: Internal.RegistryInfo<Internal.RuleBlockEntityModifierType<any>>;
        static readonly CHUNK_STATUS: Internal.RegistryInfo<Internal.ChunkStatus>;
        static readonly RULE_TEST: Internal.RegistryInfo<Internal.RuleTestType<any>>;
    }
    type RegistryInfo_<T> = RegistryInfo<T>;
    interface SpriteContentsExtension {
        abstract getOrCreatePBRHolder(): Internal.PBRSpriteHolder;
        abstract getPBRHolder(): Internal.PBRSpriteHolder;
        get orCreatePBRHolder(): Internal.PBRSpriteHolder
        get PBRHolder(): Internal.PBRSpriteHolder
    }
    type SpriteContentsExtension_ = SpriteContentsExtension;
    class MangroveRootsBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
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
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
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
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
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
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly WATERLOGGED: Internal.BooleanProperty;
    }
    type MangroveRootsBlock_ = MangroveRootsBlock;
    interface AttachmentTarget {
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        setAttached<A>(type: Internal.AttachmentType_<A>, value: A): A;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        getAttached<A>(type: Internal.AttachmentType_<A>): A;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        readonly NBT_ATTACHMENT_KEY: "fabric:attachments";
    }
    type AttachmentTarget_ = AttachmentTarget;
    abstract class ByteBuffer extends Internal.Buffer implements Internal.Comparable<Internal.ByteBuffer> {
        alignedSlice(arg0: number): this;
        abstract slice(arg0: number, arg1: number): this;
        mismatch(arg0: Internal.ByteBuffer_): number;
        abstract getDouble(arg0: number): number;
        abstract putChar(arg0: number, arg1: string): this;
        static allocate(arg0: number): Internal.ByteBuffer;
        put(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        compareTo(arg0: any): number;
        rewind(): this;
        get(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        abstract putDouble(arg0: number, arg1: number): this;
        abstract slice(): this;
        abstract getFloat(arg0: number): number;
        order(): Internal.ByteOrder;
        abstract put(arg0: number): this;
        abstract putLong(arg0: number, arg1: number): this;
        abstract asReadOnlyBuffer(): this;
        abstract asIntBuffer(): Internal.IntBuffer;
        abstract getChar(arg0: number): string;
        abstract asFloatBuffer(): Internal.FloatBuffer;
        put(arg0: number, arg1: Internal.ByteBuffer_, arg2: number, arg3: number): this;
        put(arg0: number, arg1: number[]): this;
        abstract getInt(): number;
        get(arg0: number, arg1: number[]): this;
        abstract getChar(): string;
        put(arg0: Internal.ByteBuffer_): this;
        abstract putFloat(arg0: number, arg1: number): this;
        abstract putLong(arg0: number): this;
        abstract get(arg0: number): number;
        abstract getDouble(): number;
        abstract putFloat(arg0: number): this;
        abstract asLongBuffer(): Internal.LongBuffer;
        abstract asShortBuffer(): Internal.ShortBuffer;
        static wrap(arg0: number[]): Internal.ByteBuffer;
        abstract putChar(arg0: string): this;
        abstract asCharBuffer(): Internal.CharBuffer;
        array(): number[];
        abstract getLong(arg0: number): number;
        put(arg0: number[], arg1: number, arg2: number): this;
        abstract putShort(arg0: number, arg1: number): this;
        abstract compact(): this;
        static allocateDirect(arg0: number): Internal.ByteBuffer;
        abstract putShort(arg0: number): this;
        abstract getShort(arg0: number): number;
        order(arg0: Internal.ByteOrder_): this;
        get(arg0: number[], arg1: number, arg2: number): this;
        abstract getShort(): number;
        abstract getInt(arg0: number): number;
        put(arg0: number[]): this;
        alignmentOffset(arg0: number, arg1: number): number;
        abstract put(arg0: number, arg1: number): this;
        reset(): this;
        abstract putDouble(arg0: number): this;
        compareTo(arg0: Internal.ByteBuffer_): number;
        get(arg0: number[]): this;
        clear(): this;
        static wrap(arg0: number[], arg1: number, arg2: number): Internal.ByteBuffer;
        abstract asDoubleBuffer(): Internal.DoubleBuffer;
        abstract getLong(): number;
        abstract getFloat(): number;
        abstract get(): number;
        abstract duplicate(): this;
        mark(): this;
        abstract putInt(arg0: number): this;
        abstract putInt(arg0: number, arg1: number): this;
        get "int"(): number
        get "char"(): string
        get "double"(): number
        get "short"(): number
        get "long"(): number
        get "float"(): number
    }
    type ByteBuffer_ = ByteBuffer;
    class ServerboundClientInformationPacket extends Internal.Record implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: string, arg1: number, arg2: Internal.ChatVisiblity_, arg3: boolean, arg4: number, arg5: Internal.HumanoidArm_, arg6: boolean, arg7: boolean)
        constructor(arg0: Internal.FriendlyByteBuf_)
        chatColors(): boolean;
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        language(): string;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        viewDistance(): number;
        modelCustomisation(): number;
        mainHand(): Internal.HumanoidArm;
        chatVisibility(): Internal.ChatVisiblity;
        isSkippable(): boolean;
        textFilteringEnabled(): boolean;
        allowsListing(): boolean;
        get skippable(): boolean
        static readonly MAX_LANGUAGE_LENGTH: 16;
    }
    type ServerboundClientInformationPacket_ = ServerboundClientInformationPacket;
    class InventoryChangeBuilder extends Internal.BaseTriggerInstanceBuilder implements Internal.ItemSetter {
        constructor()
        /**
         * The amount of slots completely filled (stacksize) in the inventory.
        */
        setSlotsFull(arg0: Bounds_): void;
        wrapEntity(arg0: Internal.EntityPredicate_): Internal.ContextAwarePredicate;
        /**
         * The amount of slots empty in the inventory.
        */
        setSlotsEmpty(arg0: Bounds_): void;
        wrapItem(arg0: Internal.Ingredient_): Internal.ItemPredicate;
        /**
         * The amount of slots occupied in the inventory.
        */
        setSlotsOccupied(arg0: Bounds_): void;
        /**
         * A list of items in the player's inventory.
         * 
         * All items in the list must be in the player's inventory,
         * 
         * but not all items in the player's inventory have to be in this list.
        */
        setItems(...arg0: Internal.Ingredient_[]): void;
        toEntity(arg0: Internal.EntityType_<any>): Internal.EntityPredicate;
        wrapEntity(arg0: Internal.EntityType_<any>): Internal.ContextAwarePredicate;
        wrapEntity(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ContextAwarePredicate;
        /**
         * A list of items in the player's inventory.
         * 
         * All items in the list must be in the player's inventory,
         * 
         * but not all items in the player's inventory have to be in this list.
        */
        setItems(...arg0: Internal.ItemPredicate_[]): void;
        /**
         * The amount of slots completely filled (stacksize) in the inventory.
        */
        set slotsFull(arg0: Bounds_)
        /**
         * The amount of slots empty in the inventory.
        */
        set slotsEmpty(arg0: Bounds_)
        /**
         * The amount of slots occupied in the inventory.
        */
        set slotsOccupied(arg0: Bounds_)
        /**
         * A list of items in the player's inventory.
         * 
         * All items in the list must be in the player's inventory,
         * 
         * but not all items in the player's inventory have to be in this list.
        */
        set items(...arg0: Internal.Ingredient_[])
        /**
         * A list of items in the player's inventory.
         * 
         * All items in the list must be in the player's inventory,
         * 
         * but not all items in the player's inventory have to be in this list.
        */
        set items(...arg0: Internal.ItemPredicate_[])
    }
    type InventoryChangeBuilder_ = InventoryChangeBuilder;
    class DaylightDetectorBlock extends Internal.BaseEntityBlock {
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
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
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
        static readonly SHAPE: Internal.CubeVoxelShape;
        static readonly INVERTED: Internal.BooleanProperty;
        static readonly POWER: Internal.IntegerProperty;
    }
    type DaylightDetectorBlock_ = DaylightDetectorBlock;
    /**
     * Invoked when registering handlers for item tooltips.
     * 
     * `text` can be a component or a list of components.
    */
    class ItemTooltipEventJS extends Internal.EventJS {
        constructor(m: Internal.Map_<Internal.Item, Internal.List<any>>)
        /**
         * Adds a dynamic tooltip handler to all items matching the ingredient.
        */
        addAdvanced(item: Internal.Ingredient_, handler: Internal.ItemTooltipEventJS$StaticTooltipHandlerFromJS_): void;
        /**
         * Is shift key pressed.
        */
        isShift(): boolean;
        /**
         * Adds text to all items.
        */
        addToAll(text: any): void;
        /**
         * Is control key pressed.
        */
        isCtrl(): boolean;
        /**
         * Is alt key pressed.
        */
        isAlt(): boolean;
        /**
         * Adds text to all items matching the ingredient.
        */
        add(item: Internal.Ingredient_, text: any): void;
        /**
         * Adds a dynamic tooltip handler to all items.
        */
        addAdvancedToAll(handler: Internal.ItemTooltipEventJS$StaticTooltipHandlerFromJS_): void;
        /**
         * Is shift key pressed.
        */
        get shift(): boolean
        /**
         * Is control key pressed.
        */
        get ctrl(): boolean
        /**
         * Is alt key pressed.
        */
        get alt(): boolean
    }
    type ItemTooltipEventJS_ = ItemTooltipEventJS;
    class KeyboardHandler {
        constructor(arg0: Internal.Minecraft_)
        setClipboard(arg0: string): void;
        setup(arg0: number): void;
        keyPress(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        handler$dai000$emi$onChar(window: number, codePoint: number, modifiers: number, info: Internal.CallbackInfo_): void;
        getClipboard(): string;
        tick(): void;
        handler$dai000$emi$onKey(window: number, key: number, scancode: number, action: number, modifiers: number, info: Internal.CallbackInfo_): void;
        set clipboard(arg0: string)
        set up(arg0: number)
        get clipboard(): string
        static readonly DEBUG_CRASH_TIME: 10000;
    }
    type KeyboardHandler_ = KeyboardHandler;
    interface Char2ShortFunction extends it.unimi.dsi.fastutil.Function<string, number>, Internal.IntUnaryOperator {
        composeObject<T>(arg0: Internal.Object2CharFunction_<T>): Internal.Object2ShortFunction<T>;
        andThenByte(arg0: Internal.Short2ByteFunction_): Internal.Char2ByteFunction;
        apply(arg0: string): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, string>): Internal.Function<T, number>;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        containsKey(arg0: string): boolean;
        composeByte(arg0: Internal.Byte2CharFunction_): Internal.Byte2ShortFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        defaultReturnValue(): number;
        composeInt(arg0: Internal.Int2CharFunction_): Internal.Int2ShortFunction;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        identity(): Internal.IntUnaryOperator;
        andThenObject<T>(arg0: Internal.Short2ObjectFunction_<T>): Internal.Char2ObjectFunction<T>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        composeDouble(arg0: Internal.Double2CharFunction_): Internal.Double2ShortFunction;
        andThenLong(arg0: Internal.Short2LongFunction_): Internal.Char2LongFunction;
        composeChar(arg0: Internal.Char2CharFunction_): this;
        composeReference<T>(arg0: Internal.Reference2CharFunction_<T>): Internal.Reference2ShortFunction<T>;
        put(arg0: string, arg1: number): number;
        andThenReference<T>(arg0: Internal.Short2ReferenceFunction_<T>): Internal.Char2ReferenceFunction<T>;
        andThenShort(arg0: Internal.Short2ShortFunction_): this;
        composeLong(arg0: Internal.Long2CharFunction_): Internal.Long2ShortFunction;
        /**
         * @deprecated
        */
        put(arg0: string, arg1: number): number;
        size(): number;
        remove(arg0: string): number;
        composeFloat(arg0: Internal.Float2CharFunction_): Internal.Float2ShortFunction;
        defaultReturnValue(arg0: number): void;
        andThenDouble(arg0: Internal.Short2DoubleFunction_): Internal.Char2DoubleFunction;
        clear(): void;
        abstract get(arg0: string): number;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        getOrDefault(arg0: string, arg1: number): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<string, T>;
        andThenFloat(arg0: Internal.Short2FloatFunction_): Internal.Char2FloatFunction;
        composeShort(arg0: Internal.Short2CharFunction_): Internal.Short2ShortFunction;
        andThenInt(arg0: Internal.Short2IntFunction_): Internal.Char2IntFunction;
        andThenChar(arg0: Internal.Short2CharFunction_): Internal.Char2CharFunction;
        (arg0: string): number;
    }
    type Char2ShortFunction_ = Char2ShortFunction;
    class CubeVoxelShape extends Internal.VoxelShape {
        constructor(arg0: Internal.DiscreteVoxelShape_)
    }
    type CubeVoxelShape_ = CubeVoxelShape;
    class Axolotl$Variant extends Internal.Enum<Internal.Axolotl$Variant> implements Internal.StringRepresentable {
        static valueOf(arg0: string): Internal.Axolotl$Variant;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        getName(): string;
        static byId(arg0: number): Internal.Axolotl$Variant;
        static values(): Internal.Axolotl$Variant[];
        static getCommonSpawnVariant(arg0: Internal.RandomSource_): Internal.Axolotl$Variant;
        static getRareSpawnVariant(arg0: Internal.RandomSource_): Internal.Axolotl$Variant;
        getId(): number;
        get serializedName(): string
        get name(): string
        get id(): number
        static readonly GOLD: Internal.Axolotl$Variant;
        static readonly CYAN: Internal.Axolotl$Variant;
        static readonly BLUE: Internal.Axolotl$Variant;
        static readonly CODEC: Internal.Codec<Internal.Axolotl$Variant>;
        static readonly LUCY: Internal.Axolotl$Variant;
        static readonly WILD: Internal.Axolotl$Variant;
    }
    type Axolotl$Variant_ = "gold" | "wild" | Axolotl$Variant | "blue" | "lucy" | "cyan";
    class DecoratedPotBlockEntity extends Internal.BlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        getDecorations(): Internal.DecoratedPotBlockEntity$Decorations;
        serializeNBT(): Internal.Tag;
        onLoad(): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        setFromItem(arg0: Internal.ItemStack_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getModelData(): Internal.ModelData;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getDirection(): Internal.Direction;
        getRenderBoundingBox(): Internal.AABB;
        get decorations(): Internal.DecoratedPotBlockEntity$Decorations
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        set fromItem(arg0: Internal.ItemStack_)
        get modelData(): Internal.ModelData
        get direction(): Internal.Direction
        get renderBoundingBox(): Internal.AABB
        static readonly TAG_SHERDS: "sherds";
    }
    type DecoratedPotBlockEntity_ = DecoratedPotBlockEntity;
    class IntComparingBECEntityCondition extends Internal.EntityCondition<any> {
        constructor(arg0: Internal.ToIntBiFunction_<Internal.Holder<Internal.ConfiguredBiEntityCondition<any, any>>, Internal.Entity>)
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        static ridingRecursive(arg0: Internal.Holder_<Internal.ConfiguredBiEntityCondition<any, any>>, arg1: Internal.Entity_): number;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static passengerRecursive(arg0: Internal.Holder_<Internal.ConfiguredBiEntityCondition<any, any>>, arg1: Internal.Entity_): number;
        static passenger(arg0: Internal.Holder_<Internal.ConfiguredBiEntityCondition<any, any>>, arg1: Internal.Entity_): number;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type IntComparingBECEntityCondition_ = IntComparingBECEntityCondition;
    interface Trigger <E extends Internal.LivingEntity> {
        abstract trigger(arg0: Internal.ServerLevel_, arg1: E, arg2: number): boolean;
        (arg0: Internal.ServerLevel, arg1: E, arg2: number): boolean;
    }
    type Trigger_<E extends Internal.LivingEntity> = Trigger<E>;
    interface IrisExtendedBufferBuilder {
        abstract iris$currentRenderType(): number;
        abstract iris$vertexCount(): number;
        abstract iris$injectNormalAndUV1(): boolean;
        abstract iris$incrementVertexCount(): void;
        abstract iris$resetVertexCount(): void;
        abstract iris$mode(): Internal.VertexFormat$Mode;
        abstract iris$currentLocalPosY(): number;
        abstract iris$currentLocalPosZ(): number;
        abstract iris$format(): Internal.VertexFormat;
        abstract iris$extending(): boolean;
        abstract iris$isTerrain(): boolean;
        abstract iris$currentBlock(): number;
        abstract iris$currentLocalPosX(): number;
    }
    type IrisExtendedBufferBuilder_ = IrisExtendedBufferBuilder;
    class ServerLifecycleEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.MinecraftServer_)
        getServer(): Internal.MinecraftServer;
        get server(): Internal.MinecraftServer
    }
    type ServerLifecycleEvent_ = ServerLifecycleEvent;
    class HoeItem extends Internal.DiggerItem implements Internal.HoeItemAccessor {
        constructor(arg0: Internal.Tier_, arg1: number, arg2: number, arg3: Internal.Item$Properties_)
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
        static changeIntoState(arg0: Internal.BlockState_): Internal.Consumer<Internal.UseOnContext>;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        static getTillingActions$emi_$md$2a2e30$0(): Internal.Map<any, any>;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        static changeIntoStateAndDropItem(arg0: Internal.BlockState_, arg1: Internal.ItemLike_): Internal.Consumer<Internal.UseOnContext>;
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
        static onlyIfAirAbove(arg0: Internal.UseOnContext_): boolean;
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
        static getTillingActions(): Internal.Map<Internal.Block, com.mojang.datafixers.util.Pair<Internal.Predicate<Internal.UseOnContext>, Internal.Consumer<Internal.UseOnContext>>>;
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
        get tillingActions$emi_$md$2a2e30$0(): Internal.Map<any, any>
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        get tillingActions(): Internal.Map<Internal.Block, com.mojang.datafixers.util.Pair<Internal.Predicate<Internal.UseOnContext>, Internal.Consumer<Internal.UseOnContext>>>
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        /**
         * @deprecated
        */
        static TILLABLES: {[key: Internal.Block]: com.mojang.datafixers.util.Pair<any, any>, [key: Internal.GrassBlock]: com.mojang.datafixers.util.Pair<any, any>, [key: Internal.Block]: com.mojang.datafixers.util.Pair<any, any>, [key: Internal.DirtPathBlock]: com.mojang.datafixers.util.Pair<any, any>, [key: Internal.RootedDirtBlock]: com.mojang.datafixers.util.Pair<any, any>};
    }
    type HoeItem_ = HoeItem;
    interface ServerLevelAccessor extends Internal.LevelAccessor {
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_): Player;
        dayTime(): number;
        abstract getShade(arg0: Internal.Direction_, arg1: boolean): number;
        getSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        getMaxSection(): number;
        abstract getLevelData(): Internal.LevelData;
        getBrightness(arg0: Internal.LightLayer_, arg1: BlockPos_): number;
        getSectionYFromSectionIndex(arg0: number): number;
        abstract players(): Internal.List<Player>;
        abstract getBiomeManager(): Internal.BiomeManager;
        abstract getRandom(): Internal.RandomSource;
        isEmptyBlock(arg0: BlockPos_): boolean;
        getMaxLocalRawBrightness(arg0: BlockPos_, arg1: number): number;
        abstract removeBlock(arg0: BlockPos_, arg1: boolean): boolean;
        playSound(arg0: Player_, arg1: BlockPos_, arg2: Internal.SoundEvent_, arg3: Internal.SoundSource_): void;
        getBlockCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        getTimeOfDay(arg0: number): number;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getHeightmapPos(arg0: Internal.Heightmap$Types_, arg1: BlockPos_): BlockPos;
        blockUpdated(arg0: BlockPos_, arg1: Internal.Block_): void;
        abstract setBlock(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: number, arg3: number): boolean;
        abstract isClientSide(): boolean;
        getEntities(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.Entity>;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_): Internal.List<T>;
        abstract getBlockTicks(): Internal.LevelTickAccess<Internal.Block>;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getPathfindingCostFromLightLevels(arg0: BlockPos_): number;
        abstract dimensionType(): Internal.DimensionType;
        abstract getSkyDarken(): number;
        getMinBuildHeight(): number;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number): void;
        getBiomeFabric(pos: BlockPos_): Internal.Holder<any>;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): Player;
        abstract destroyBlock(arg0: BlockPos_, arg1: boolean, arg2: Internal.Entity_, arg3: number): boolean;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
        */
        abstract getSeaLevel(): number;
        abstract getFluidTicks(): Internal.LevelTickAccess<Internal.Fluid>;
        getSectionIndex(arg0: number): number;
        getDirectSignalTo(arg0: BlockPos_): number;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: number, arg2: number, arg3: number): Player;
        getMaxBuildHeight(): number;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: BlockPos_, arg1: BlockPos_): boolean;
        destroyBlock(arg0: BlockPos_, arg1: boolean): boolean;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Block_, arg2: number): void;
        getChunk(arg0: number, arg1: number): Internal.ChunkAccess;
        addFreshEntity(arg0: Internal.Entity_): boolean;
        hasSignal(arg0: BlockPos_, arg1: Internal.Direction_): boolean;
        getCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        destroyBlock(arg0: BlockPos_, arg1: boolean, arg2: Internal.Entity_): boolean;
        getHeight(): number;
        getChunk(arg0: BlockPos_): Internal.ChunkAccess;
        abstract isFluidAtPosition(arg0: BlockPos_, arg1: Internal.Predicate_<Internal.FluidState>): boolean;
        abstract getWorldBorder(): Internal.WorldBorder;
        getMaxLocalRawBrightness(arg0: BlockPos_): number;
        isUnobstructed(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.CollisionContext_): boolean;
        /**
         * @deprecated
        */
        getBlockEntityRenderAttachment(pos: BlockPos_): any;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: BlockPos_): boolean;
        getBiome(arg0: BlockPos_): Internal.Holder<Internal.Biome>;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(arg0: BlockPos_): number;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Block_, arg2: number, arg3: Internal.TickPriority_): void;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        abstract gameEvent(arg0: Internal.GameEvent_, arg1: Vec3d_, arg2: Internal.GameEvent$Context_): void;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number): Player;
        neighborShapeChanged(arg0: Internal.Direction_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_, arg4: number, arg5: number): void;
        getControlInputSignal(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): number;
        getBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        getMinSection(): number;
        findFreePosition(arg0: Internal.Entity_, arg1: Internal.VoxelShape_, arg2: Vec3d_, arg3: number, arg4: number, arg5: number): Internal.Optional<Vec3d>;
        abstract getBlockState(arg0: BlockPos_): Internal.BlockState;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        abstract playSound(arg0: Player_, arg1: BlockPos_, arg2: Internal.SoundEvent_, arg3: Internal.SoundSource_, arg4: number, arg5: number): void;
        getNearestPlayer(arg0: Internal.Entity_, arg1: number): Player;
        hasNeighborSignal(arg0: BlockPos_): boolean;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getBlockStatesIfLoaded(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        getRawBrightness(arg0: BlockPos_, arg1: number): number;
        abstract addParticle(arg0: Internal.ParticleOptions_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        abstract getCurrentDifficultyAt(arg0: BlockPos_): Internal.DifficultyInstance;
        getDifficulty(): Internal.Difficulty;
        canSeeSky(arg0: BlockPos_): boolean;
        abstract enabledFeatures(): Internal.FeatureFlagSet;
        getMoonPhase(): number;
        isUnobstructed(arg0: Internal.Entity_): boolean;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: Internal.List_<T>, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number): T;
        abstract getUncachedNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        addFreshEntityWithPassengers(arg0: Internal.Entity_): void;
        abstract getEntities(arg0: Internal.Entity_, arg1: Internal.AABB_, arg2: Internal.Predicate_<Internal.Entity>): Internal.List<Internal.Entity>;
        getPlayerByUUID(arg0: Internal.UUID_): Player;
        canSeeSkyFromBelowWater(arg0: BlockPos_): boolean;
        holderLookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup<T>;
        abstract getHeight(arg0: Internal.Heightmap$Types_, arg1: number, arg2: number): number;
        getSectionsCount(): number;
        abstract isStateAtPosition(arg0: BlockPos_, arg1: Internal.Predicate_<Internal.BlockState>): boolean;
        getNearbyPlayers(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: Internal.AABB_): Internal.List<Player>;
        getSectionIndexFromSectionY(arg0: number): number;
        abstract getServer(): Internal.MinecraftServer;
        abstract levelEvent(arg0: Player_, arg1: number, arg2: BlockPos_, arg3: number): void;
        setBlock(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: number): boolean;
        getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_): Internal.ChunkAccess;
        noCollision(arg0: Internal.Entity_): boolean;
        abstract getLevel(): Internal.ServerLevel;
        abstract getEntities<T extends Internal.Entity>(arg0: Internal.EntityTypeTest_<Internal.Entity, T>, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getBestNeighborSignal(arg0: BlockPos_): number;
        hasChunk(arg0: number, arg1: number): boolean;
        getNearbyEntities<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: Internal.AABB_): Internal.List<T>;
        getBlockEntityRenderData(pos: BlockPos_): any;
        getMoonBrightness(): number;
        noCollision(arg0: Internal.AABB_): boolean;
        isWaterAt(arg0: BlockPos_): boolean;
        getDirectSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        abstract getLightEngine(): Internal.LevelLightEngine;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        abstract getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        gameEvent(arg0: Internal.GameEvent_, arg1: BlockPos_, arg2: Internal.GameEvent$Context_): void;
        getModelDataManager(): Internal.ModelDataManager;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number, arg3: Internal.TickPriority_): void;
        isOutsideBuildHeight(arg0: number): boolean;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Predicate_<Internal.Entity>): Player;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: Vec3d_): void;
        abstract getFluidState(arg0: BlockPos_): Internal.FluidState;
        abstract getChunkSource(): Internal.ChunkSource;
        abstract getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_, arg3: boolean): Internal.ChunkAccess;
        abstract registryAccess(): Internal.RegistryAccess;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        levelEvent(arg0: number, arg1: BlockPos_, arg2: number): void;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        abstract nextSubTickCount(): number;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: BlockPos_): void;
        getChunkForCollisions(arg0: number, arg1: number): Internal.BlockGetter;
        containsAnyLiquid(arg0: Internal.AABB_): boolean;
        hasBiomes(): boolean;
        getMaxLightLevel(): number;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number, arg6: Internal.AABB_): T;
        isAreaLoaded(arg0: BlockPos_, arg1: number): boolean;
        traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get maxSection(): number
        get levelData(): Internal.LevelData
        get biomeManager(): Internal.BiomeManager
        get random(): Internal.RandomSource
        get clientSide(): boolean
        get blockTicks(): Internal.LevelTickAccess<Internal.Block>
        get skyDarken(): number
        get minBuildHeight(): number
        /**
         * @deprecated
        */
        get seaLevel(): number
        get fluidTicks(): Internal.LevelTickAccess<Internal.Fluid>
        get maxBuildHeight(): number
        get height(): number
        get worldBorder(): Internal.WorldBorder
        get minSection(): number
        get difficulty(): Internal.Difficulty
        get moonPhase(): number
        get sectionsCount(): number
        get server(): Internal.MinecraftServer
        get level(): Internal.ServerLevel
        get moonBrightness(): number
        get lightEngine(): Internal.LevelLightEngine
        get modelDataManager(): Internal.ModelDataManager
        get chunkSource(): Internal.ChunkSource
        get maxLightLevel(): number
    }
    type ServerLevelAccessor_ = ServerLevelAccessor;
    class ServerboundSetCommandMinecartPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: string, arg2: boolean)
        handle(arg0: Internal.PacketListener_): void;
        getCommand(): string;
        isTrackOutput(): boolean;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getCommandBlock(arg0: Internal.Level_): Internal.BaseCommandBlock;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        isSkippable(): boolean;
        get command(): string
        get trackOutput(): boolean
        get skippable(): boolean
    }
    type ServerboundSetCommandMinecartPacket_ = ServerboundSetCommandMinecartPacket;
    interface DoubleBinaryOperator {
        abstract applyAsDouble(arg0: number, arg1: number): number;
        (arg0: number, arg1: number): number;
    }
    type DoubleBinaryOperator_ = DoubleBinaryOperator;
    class TagManager implements Internal.PreparableReloadListener, Internal.IdentifiableResourceReloadListener {
        constructor(arg0: Internal.RegistryAccess_)
        getName(): string;
        getResult(): Internal.List<Internal.TagManager$LoadResult<any>>;
        getFabricDependencies(): Internal.Collection<any>;
        static getTagDir(arg0: Internal.ResourceKey_<Internal.Registry<any>>): string;
        getFabricId(): ResourceLocation;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get name(): string
        get result(): Internal.List<Internal.TagManager$LoadResult<any>>
        get fabricDependencies(): Internal.Collection<any>
        get fabricId(): ResourceLocation
        readonly registryAccess: Internal.RegistryAccess;
    }
    type TagManager_ = TagManager;
    interface MobAccessor {
        abstract setNavigation(nav: Internal.PathNavigation_): void;
        abstract setMoveControl(control: Internal.MoveControl_): void;
        set navigation(nav: Internal.PathNavigation_)
        set moveControl(control: Internal.MoveControl_)
    }
    type MobAccessor_ = MobAccessor;
    interface CaveVines {
        emission(arg0: number): Internal.ToIntFunction<Internal.BlockState>;
        hasGlowBerries(arg0: Internal.BlockState_): boolean;
        use(arg0: Internal.Entity_, arg1: Internal.BlockState_, arg2: Internal.Level_, arg3: BlockPos_): InteractionResult;
        readonly SHAPE: Internal.ArrayVoxelShape;
        readonly BERRIES: Internal.BooleanProperty;
    }
    type CaveVines_ = CaveVines;
    class ClientPlayerNetworkEvent$LoggingOut extends Internal.ClientPlayerNetworkEvent {
        constructor()
        constructor(arg0: Internal.MultiPlayerGameMode_, arg1: Internal.LocalPlayer_, arg2: Internal.Connection_)
    }
    type ClientPlayerNetworkEvent$LoggingOut_ = ClientPlayerNetworkEvent$LoggingOut;
    class JsonDecorationType implements Internal.MapDecorationType<Internal.CustomMapDecoration, Internal.SimpleMapBlockMarker> {
        constructor(target: Internal.Optional_<Internal.RuleTest>)
        constructor(target: Internal.Optional_<Internal.RuleTest>, name: Internal.Optional_<string>, rotation: number, mapColor: number, structure: Internal.Optional_<Internal.HolderSet<Internal.Structure>>, enabled: boolean)
        constructor(target: Internal.Optional_<Internal.RuleTest>, name: Internal.Optional_<string>, rotation: number, mapColor: number, enabled: boolean)
        createEmptyMarker(): Internal.SimpleMapBlockMarker;
        isFromWorld(): boolean;
        getId(): ResourceLocation;
        getName(): Internal.Optional<string>;
        getAssociatedStructure(): Internal.Optional<Internal.HolderSet<Internal.Structure>>;
        getWorldMarkerFromWorld(reader: Internal.BlockGetter_, pos: BlockPos_): Internal.SimpleMapBlockMarker;
        getRotation(): number;
        loadMarkerFromNBT(compound: Internal.CompoundTag_): Internal.SimpleMapBlockMarker;
        getDefaultMapColor(): number;
        getCustomFactoryID(): ResourceLocation;
        loadDecorationFromBuffer(buffer: Internal.FriendlyByteBuf_): Internal.CustomMapDecoration;
        getTarget(): Internal.Optional<Internal.RuleTest>;
        get fromWorld(): boolean
        get id(): ResourceLocation
        get name(): Internal.Optional<string>
        get associatedStructure(): Internal.Optional<Internal.HolderSet<Internal.Structure>>
        get rotation(): number
        get defaultMapColor(): number
        get customFactoryID(): ResourceLocation
        get target(): Internal.Optional<Internal.RuleTest>
        static readonly NETWORK_CODEC: Internal.Codec<Internal.JsonDecorationType>;
        static readonly CODEC: Internal.Codec<Internal.JsonDecorationType>;
    }
    type JsonDecorationType_ = Special.MapMarkers | JsonDecorationType;
    interface Boolean2DoubleFunction extends it.unimi.dsi.fastutil.Function<boolean, number> {
        andThenShort(arg0: Internal.Double2ShortFunction_): Internal.Boolean2ShortFunction;
        /**
         * @deprecated
        */
        put(arg0: boolean, arg1: number): number;
        andThenDouble(arg0: Internal.Double2DoubleFunction_): this;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        composeByte(arg0: Internal.Byte2BooleanFunction_): Internal.Byte2DoubleFunction;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        andThenByte(arg0: Internal.Double2ByteFunction_): Internal.Boolean2ByteFunction;
        composeObject<T>(arg0: Internal.Object2BooleanFunction_<T>): Internal.Object2DoubleFunction<T>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeLong(arg0: Internal.Long2BooleanFunction_): Internal.Long2DoubleFunction;
        remove(arg0: boolean): number;
        andThenLong(arg0: Internal.Double2LongFunction_): Internal.Boolean2LongFunction;
        composeChar(arg0: Internal.Char2BooleanFunction_): Internal.Char2DoubleFunction;
        andThenObject<T>(arg0: Internal.Double2ObjectFunction_<T>): Internal.Boolean2ObjectFunction<T>;
        composeShort(arg0: Internal.Short2BooleanFunction_): Internal.Short2DoubleFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        defaultReturnValue(arg0: number): void;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        abstract get(arg0: boolean): number;
        composeReference<T>(arg0: Internal.Reference2BooleanFunction_<T>): Internal.Reference2DoubleFunction<T>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<boolean, T>;
        andThenReference<T>(arg0: Internal.Double2ReferenceFunction_<T>): Internal.Boolean2ReferenceFunction<T>;
        defaultReturnValue(): number;
        andThenInt(arg0: Internal.Double2IntFunction_): Internal.Boolean2IntFunction;
        containsKey(arg0: boolean): boolean;
        getOrDefault(arg0: boolean, arg1: number): number;
        size(): number;
        andThenFloat(arg0: Internal.Double2FloatFunction_): Internal.Boolean2FloatFunction;
        composeDouble(arg0: Internal.Double2BooleanFunction_): Internal.Double2DoubleFunction;
        composeInt(arg0: Internal.Int2BooleanFunction_): Internal.Int2DoubleFunction;
        put(arg0: boolean, arg1: number): number;
        clear(): void;
        apply(arg0: boolean): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, boolean>): Internal.Function<T, number>;
        andThenChar(arg0: Internal.Double2CharFunction_): Internal.Boolean2CharFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        identity<T>(): Internal.Function<T, T>;
        composeFloat(arg0: Internal.Float2BooleanFunction_): Internal.Float2DoubleFunction;
        (arg0: boolean): number;
    }
    type Boolean2DoubleFunction_ = Boolean2DoubleFunction;
    class RadiantEssenceItem extends Internal.Item {
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
    type RadiantEssenceItem_ = RadiantEssenceItem;
    class AnyOfCondition$Builder extends Internal.CompositeLootItemCondition$Builder {
        constructor(...arg0: Internal.LootItemCondition$Builder_[])
        and(arg0: Internal.LootItemCondition$Builder_): Internal.AllOfCondition$Builder;
        invert(): Internal.LootItemCondition$Builder;
    }
    type AnyOfCondition$Builder_ = AnyOfCondition$Builder;
    class ModuleDescriptor$Modifier extends Internal.Enum<Internal.ModuleDescriptor$Modifier> {
        static valueOf(arg0: string): Internal.ModuleDescriptor$Modifier;
        static values(): Internal.ModuleDescriptor$Modifier[];
        static readonly AUTOMATIC: Internal.ModuleDescriptor$Modifier;
        static readonly MANDATED: Internal.ModuleDescriptor$Modifier;
        static readonly OPEN: Internal.ModuleDescriptor$Modifier;
        static readonly SYNTHETIC: Internal.ModuleDescriptor$Modifier;
    }
    type ModuleDescriptor$Modifier_ = ModuleDescriptor$Modifier | "mandated" | "open" | "synthetic" | "automatic";
    class ShapelessRecipeSchema$ShapelessRecipeJS extends Internal.RecipeJS {
        constructor()
        getMod(): string;
        get mod(): string
    }
    type ShapelessRecipeSchema$ShapelessRecipeJS_ = ShapelessRecipeSchema$ShapelessRecipeJS;
    class HologramProjectorBlock extends Internal.BaseEntityBlock implements Internal.SimpleWaterloggedBlock {
        constructor()
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
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
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly SHAPE: Internal.CubeVoxelShape;
        static readonly WATERLOGGED: Internal.BooleanProperty;
    }
    type HologramProjectorBlock_ = HologramProjectorBlock;
    class ScreenEvent$MouseButtonPressed$Pre extends Internal.ScreenEvent$MouseButtonPressed {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number)
    }
    type ScreenEvent$MouseButtonPressed$Pre_ = ScreenEvent$MouseButtonPressed$Pre;
    class SimpleElixir extends Internal.DrinkableItem {
        constructor(arg0: Internal.Item$Properties_, arg1: Internal.Supplier_<Internal.MobEffectInstance>, arg2: boolean)
        constructor(arg0: Internal.Item$Properties_, arg1: Internal.Supplier_<Internal.MobEffectInstance>)
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
        getMobEffect(): Internal.MobEffectInstance;
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
        static addPotionTooltip(arg0: Internal.MobEffectInstance_, arg1: Internal.List_<Internal.Component>, arg2: number): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
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
        get mobEffect(): Internal.MobEffectInstance
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
    type SimpleElixir_ = SimpleElixir;
    interface LivingDamageCache {
        abstract bypassesDamageCheck(): boolean;
        abstract getModifyDamageTakenPowers(): Internal.List<Internal.Holder<Internal.ConfiguredPower<Internal.ModifyDamageTakenConfiguration, Internal.ModifyDamageTakenPower>>>;
        abstract getModifyDamageDealtPowers(): Internal.List<Internal.Holder<Internal.ConfiguredPower<Internal.ModifyDamageDealtConfiguration, Internal.ModifyDamageDealtPower>>>;
        abstract bypassDamageCheck(arg0: boolean): void;
        abstract setModifyDamageDealtPowers(arg0: Internal.List_<Internal.Holder<Internal.ConfiguredPower<Internal.ModifyDamageDealtConfiguration, Internal.ModifyDamageDealtPower>>>): void;
        abstract setArmorValues(arg0: number, arg1: number): void;
        abstract setModifyDamageTakenPowers(arg0: Internal.List_<Internal.Holder<Internal.ConfiguredPower<Internal.ModifyDamageTakenConfiguration, Internal.ModifyDamageTakenPower>>>): void;
        gatherDamagePowers(arg0: Internal.Entity_, arg1: DamageSource_, arg2: number): void;
        get modifyDamageTakenPowers(): Internal.List<Internal.Holder<Internal.ConfiguredPower<Internal.ModifyDamageTakenConfiguration, Internal.ModifyDamageTakenPower>>>
        get modifyDamageDealtPowers(): Internal.List<Internal.Holder<Internal.ConfiguredPower<Internal.ModifyDamageDealtConfiguration, Internal.ModifyDamageDealtPower>>>
        set modifyDamageDealtPowers(arg0: Internal.List_<Internal.Holder<Internal.ConfiguredPower<Internal.ModifyDamageDealtConfiguration, Internal.ModifyDamageDealtPower>>>)
        set modifyDamageTakenPowers(arg0: Internal.List_<Internal.Holder<Internal.ConfiguredPower<Internal.ModifyDamageTakenConfiguration, Internal.ModifyDamageTakenPower>>>)
    }
    type LivingDamageCache_ = LivingDamageCache;
    class MaxTotalModifierOperation extends Internal.ModifierOperation {
        constructor()
    }
    type MaxTotalModifierOperation_ = MaxTotalModifierOperation;
    abstract class ImbuableChestplateArmorItem extends Internal.ExtendedArmorItem implements Internal.IPresetSpellContainer {
        constructor(arg0: any_, arg1: Internal.ArmorItem$Type_, arg2: Internal.Item$Properties_)
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        initializeSpellContainer(arg0: Internal.ItemStack_): void;
        getTick(arg0: any): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        isPerspectiveAware(): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        setAnimData<D>(arg0: Internal.Entity_, arg1: number, arg2: Internal.SerializableDataTicket_<D>, arg3: D): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>): D;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        static getId(arg0: Internal.ItemStack_): number;
        setArmorToughness(armorToughness: number): void;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        stopTriggeredArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        setAttackSpeed(attackSpeed: number): void;
        triggerAnim<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        triggerAnim<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        static registerSyncedAnimatable(arg0: Internal.GeoAnimatable_): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getBoneResetTime(): number;
        getDamage(arg0: Internal.ItemStack_): number;
        triggerArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vector3f;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string, arg4: Internal.PacketDistributor$PacketTarget_): void;
        arch$registryName(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        syncAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>, arg2: D, arg3: Internal.PacketDistributor$PacketTarget_): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        static getOrAssignId(arg0: Internal.ItemStack_, arg1: Internal.ServerLevel_): number;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        get perspectiveAware(): boolean
        get creativeTab(): string
        set attackDamage(attackDamage: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set armorKnockbackResistance(knockbackResistance: number)
        get boneResetTime(): number
        get mod(): string
        set armorProtection(armorProtection: number)
    }
    type ImbuableChestplateArmorItem_ = ImbuableChestplateArmorItem;
    abstract class AxisCycle extends Internal.Enum<Internal.AxisCycle> {
        constructor(arg0: string, arg1: number)
        static values(): Internal.AxisCycle[];
        abstract cycle(arg0: number, arg1: number, arg2: number, arg3: Internal.Direction$Axis_): number;
        abstract cycle(arg0: number, arg1: number, arg2: number, arg3: Internal.Direction$Axis_): number;
        abstract inverse(): this;
        static valueOf(arg0: string): Internal.AxisCycle;
        static between(arg0: Internal.Direction$Axis_, arg1: Internal.Direction$Axis_): Internal.AxisCycle;
        abstract cycle(arg0: Internal.Direction$Axis_): Internal.Direction$Axis;
        static readonly AXIS_VALUES: Internal.Direction$Axis[];
        static readonly NONE: Internal.AxisCycle;
        static readonly VALUES: Internal.AxisCycle[];
        static readonly FORWARD: Internal.AxisCycle;
        static readonly BACKWARD: Internal.AxisCycle;
    }
    type AxisCycle_ = "backward" | AxisCycle | "forward" | "none";
    abstract class AbstractChestBlock <E extends Internal.BlockEntity> extends Internal.BaseEntityBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.Supplier_<Internal.BlockEntityType<E>>)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
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
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        abstract combine(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: boolean): Internal.DoubleBlockCombiner$NeighborCombineResult<Internal.ChestBlockEntity>;
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
        readonly blockEntityType: Internal.Supplier<Internal.BlockEntityType<E>>;
    }
    type AbstractChestBlock_<E extends Internal.BlockEntity> = AbstractChestBlock<E>;
    class ShaderPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<any> {
        constructor()
    }
    type ShaderPower_ = ShaderPower;
    interface RenderTypeAccessor {
        abstract shouldSortOnUpload(): boolean;
        (): boolean;
    }
    type RenderTypeAccessor_ = RenderTypeAccessor;
    class Suppliers$NonSerializableMemoizingSupplier <T> implements com.google.common.base.Supplier<T> {
        get(): T;
    }
    type Suppliers$NonSerializableMemoizingSupplier_<T> = Suppliers$NonSerializableMemoizingSupplier<T>;
    class Biome$ClimateSettings extends Internal.Record {
        constructor(hasPrecipitation: boolean, temperature: number, temperatureModifier: Internal.Biome$TemperatureModifier_, downfall: number)
        downfall(): number;
        temperatureModifier(): Internal.Biome$TemperatureModifier;
        temperature(): number;
        hasPrecipitation(): boolean;
        temperatureModifier: Internal.Biome$TemperatureModifier;
        hasPrecipitation: boolean;
        temperature: number;
        downfall: number;
        static readonly CODEC: Internal.MapCodec<Internal.Biome$ClimateSettings>;
    }
    type Biome$ClimateSettings_ = Biome$ClimateSettings;
    class OrbitingEffect extends Internal.MobEffect {
        constructor(statusEffectCategory: Internal.MobEffectCategory_, color: number)
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type OrbitingEffect_ = OrbitingEffect;
    class PowerReference extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(power: ResourceLocation_)
        isConfigurationValid(): boolean;
        static mapCodec(arg0: string): Internal.MapCodec<Internal.PowerReference>;
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
        static codec(arg0: string): Internal.Codec<Internal.PowerReference>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        power(): ResourceLocation;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
    }
    type PowerReference_ = PowerReference;
    interface ServerboundInteractPacket$Action {
        abstract write(arg0: Internal.FriendlyByteBuf_): void;
        abstract dispatch(arg0: Internal.ServerboundInteractPacket$Handler_): void;
        abstract getType(): Internal.ServerboundInteractPacket$ActionType;
        get type(): Internal.ServerboundInteractPacket$ActionType
    }
    type ServerboundInteractPacket$Action_ = ServerboundInteractPacket$Action;
    class MobEffectInstancePredicateBuilder {
        constructor()
        /**
         * Test if the effect's amplifier matches an exact value. Level I is represented by 0.
        */
        setAmplifier(arg0: Bounds_): void;
        /**
         * Test whether the effect is from a beacon.
        */
        setAmbient(arg0: boolean): void;
        /**
         * Test if the effect's remaining time (in ticks) matches an exact value.
        */
        setDuration(arg0: Bounds_): void;
        /**
         * Test if the effect has visible particles.
        */
        setVisible(arg0: boolean): void;
        /**
         * Test if the effect's amplifier matches an exact value. Level I is represented by 0.
        */
        set amplifier(arg0: Bounds_)
        /**
         * Test whether the effect is from a beacon.
        */
        set ambient(arg0: boolean)
        /**
         * Test if the effect's remaining time (in ticks) matches an exact value.
        */
        set duration(arg0: Bounds_)
        /**
         * Test if the effect has visible particles.
        */
        set visible(arg0: boolean)
    }
    type MobEffectInstancePredicateBuilder_ = MobEffectInstancePredicateBuilder;
    class WaywardCompass extends Internal.Item {
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
        missingWarning(arg0: Internal.ItemStack_): boolean;
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
        static getCatacombsLocation(arg0: Internal.Entity_, arg1: Internal.CompoundTag_): Internal.GlobalPos;
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
    type WaywardCompass_ = WaywardCompass;
    class ControlElement <T> extends me.jellysquid.mods.sodium.client.gui.widgets.AbstractWidget {
        constructor(arg0: Internal.Option_<T>, arg1: Internal.Dim2i_)
        charTyped(arg0: string, arg1: number): boolean;
        getOption(): Internal.Option<T>;
        mouseReleased(arg0: number, arg1: number, arg2: number): boolean;
        isActive(): boolean;
        getTabOrderGroup(): number;
        mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
        keyReleased(arg0: number, arg1: number, arg2: number): boolean;
        mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        getDimensions(): Internal.Dim2i;
        keyPressed(arg0: number, arg1: number, arg2: number): boolean;
        getCurrentFocusPath(): Internal.ComponentPath;
        mouseDragged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        mouseMoved(arg0: number, arg1: number): void;
        get option(): Internal.Option<T>
        get active(): boolean
        get tabOrderGroup(): number
        get dimensions(): Internal.Dim2i
        get currentFocusPath(): Internal.ComponentPath
    }
    type ControlElement_<T> = ControlElement<T>;
    class ApplyEffectAction extends Internal.EntityAction<Internal.ListConfiguration<Internal.MobEffectInstance>> {
        constructor()
        execute(arg0: Internal.ListConfiguration_<Internal.MobEffectInstance>, arg1: Internal.Entity_): void;
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type ApplyEffectAction_ = ApplyEffectAction;
    class SoulSpeedEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type SoulSpeedEnchantment_ = SoulSpeedEnchantment;
    interface SpriteContentsAnimationAccessor {
        abstract getFrames(): Internal.List<Internal.SpriteContents$FrameInfo>;
        get frames(): Internal.List<Internal.SpriteContents$FrameInfo>
        (): Internal.List_<Internal.SpriteContents$FrameInfo>;
    }
    type SpriteContentsAnimationAccessor_ = SpriteContentsAnimationAccessor;
    class ServerStatusPing extends Internal.Record {
        constructor()
        constructor(channels: Internal.Map_<ResourceLocation, Internal.ServerStatusPing$ChannelData>, mods: Internal.Map_<string, string>, fmlNetworkVer: number, truncated: boolean)
        mods(): Internal.Map<string, string>;
        getFMLNetworkVersion(): number;
        fmlNetworkVer(): number;
        isTruncated(): boolean;
        channels(): Internal.Map<ResourceLocation, Internal.ServerStatusPing$ChannelData>;
        getRemoteModData(): Internal.Map<string, string>;
        truncated(): boolean;
        getRemoteChannels(): Internal.Map<ResourceLocation, Internal.ServerStatusPing$ChannelData>;
        toBuf(): Internal.ByteBuf;
        get FMLNetworkVersion(): number
        get truncated(): boolean
        get remoteModData(): Internal.Map<string, string>
        get remoteChannels(): Internal.Map<ResourceLocation, Internal.ServerStatusPing$ChannelData>
        static readonly CODEC: Internal.Codec<Internal.ServerStatusPing>;
    }
    type ServerStatusPing_ = ServerStatusPing;
    class VertexSorters$SortByDistance extends Internal.VertexSorters$AbstractVertexSorter {
        static byDistance(arg0: number, arg1: number, arg2: number): Internal.VertexSorting;
        static byDistance(arg0: Internal.VertexSorting$DistanceFunction_): Internal.VertexSorting;
        static byDistance(arg0: Vector3f_): Internal.VertexSorting;
    }
    type VertexSorters$SortByDistance_ = VertexSorters$SortByDistance;
    interface Spliterator$OfLong extends Internal.Spliterator$OfPrimitive<number, Internal.LongConsumer, Internal.Spliterator$OfLong> {
        forEachRemaining(arg0: any): void;
        trySplit(): Internal.Spliterator<any>;
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        getExactSizeIfKnown(): number;
        getComparator(): Internal.Comparator<number>;
        hasCharacteristics(arg0: number): boolean;
        abstract tryAdvance(arg0: Internal.LongConsumer_): boolean;
        tryAdvance(arg0: any): boolean;
        abstract estimateSize(): number;
        abstract characteristics(): number;
        tryAdvance(arg0: Internal.Consumer_<number>): boolean;
        forEachRemaining(arg0: Internal.LongConsumer_): void;
        get exactSizeIfKnown(): number
        get comparator(): Internal.Comparator<number>
    }
    type Spliterator$OfLong_ = Spliterator$OfLong;
    class RegisterCommandsEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.CommandDispatcher_<Internal.CommandSourceStack>, arg1: Internal.Commands$CommandSelection_, arg2: Internal.CommandBuildContext_)
        getCommandSelection(): Internal.Commands$CommandSelection;
        getDispatcher(): Internal.CommandDispatcher<Internal.CommandSourceStack>;
        getBuildContext(): Internal.CommandBuildContext;
        get commandSelection(): Internal.Commands$CommandSelection
        get dispatcher(): Internal.CommandDispatcher<Internal.CommandSourceStack>
        get buildContext(): Internal.CommandBuildContext
    }
    type RegisterCommandsEvent_ = RegisterCommandsEvent;
    class ZoneOffsetTransitionRule implements Internal.Serializable {
        getLocalTime(): Internal.LocalTime;
        getOffsetBefore(): Internal.ZoneOffset;
        getMonth(): Internal.Month;
        static of(arg0: Internal.Month_, arg1: number, arg2: Internal.DayOfWeek_, arg3: Internal.LocalTime_, arg4: boolean, arg5: Internal.ZoneOffsetTransitionRule$TimeDefinition_, arg6: Internal.ZoneOffset_, arg7: Internal.ZoneOffset_, arg8: Internal.ZoneOffset_): Internal.ZoneOffsetTransitionRule;
        getOffsetAfter(): Internal.ZoneOffset;
        isMidnightEndOfDay(): boolean;
        getDayOfWeek(): Internal.DayOfWeek;
        createTransition(arg0: number): Internal.ZoneOffsetTransition;
        getStandardOffset(): Internal.ZoneOffset;
        getDayOfMonthIndicator(): number;
        getTimeDefinition(): Internal.ZoneOffsetTransitionRule$TimeDefinition;
        get localTime(): Internal.LocalTime
        get offsetBefore(): Internal.ZoneOffset
        get month(): Internal.Month
        get offsetAfter(): Internal.ZoneOffset
        get midnightEndOfDay(): boolean
        get dayOfWeek(): Internal.DayOfWeek
        get standardOffset(): Internal.ZoneOffset
        get dayOfMonthIndicator(): number
        get timeDefinition(): Internal.ZoneOffsetTransitionRule$TimeDefinition
    }
    type ZoneOffsetTransitionRule_ = ZoneOffsetTransitionRule;
    class BeeNestDestroyedBuilder$BeeNest extends Internal.Enum<Internal.BeeNestDestroyedBuilder$BeeNest> {
        static valueOf(arg0: string): Internal.BeeNestDestroyedBuilder$BeeNest;
        static values(): Internal.BeeNestDestroyedBuilder$BeeNest[];
        static readonly bee_nest: Internal.BeeNestDestroyedBuilder$BeeNest;
        static readonly beehive: Internal.BeeNestDestroyedBuilder$BeeNest;
    }
    type BeeNestDestroyedBuilder$BeeNest_ = "beehive" | "bee_nest" | BeeNestDestroyedBuilder$BeeNest;
    class NbtCondition extends Internal.BlockCondition<Internal.FieldConfiguration<Internal.CompoundTag>> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type NbtCondition_ = NbtCondition;
    class ForlornBridgeStructure extends Internal.Structure {
        generatePieces(arg0: Internal.StructurePiecesBuilder_, arg1: Internal.Structure$GenerationContext_): void;
        static readonly CODEC: Internal.Codec<Internal.ForlornBridgeStructure>;
        static BRIDGE_SECTION_WIDTH: 4;
        static BRIDGE_SECTION_LENGTH: 6;
    }
    type ForlornBridgeStructure_ = ForlornBridgeStructure;
    class AmbientMoodSettings {
        constructor(arg0: Internal.Holder_<Internal.SoundEvent>, arg1: number, arg2: number, arg3: number)
        getTickDelay(): number;
        getBlockSearchExtent(): number;
        getSoundEvent(): Internal.Holder<Internal.SoundEvent>;
        getSoundPositionOffset(): number;
        get tickDelay(): number
        get blockSearchExtent(): number
        get soundEvent(): Internal.Holder<Internal.SoundEvent>
        get soundPositionOffset(): number
        static readonly CODEC: Internal.Codec<Internal.AmbientMoodSettings>;
        static readonly LEGACY_CAVE_SETTINGS: Internal.AmbientMoodSettings;
    }
    type AmbientMoodSettings_ = AmbientMoodSettings;
    class SerializationContext {
        constructor()
        serializeConditions(arg0: Internal.LootItemCondition_[]): Internal.JsonElement;
        static readonly INSTANCE: Internal.SerializationContext;
    }
    type SerializationContext_ = SerializationContext;
    class LevelVersion {
        snapshot(): boolean;
        static parse(arg0: Internal.Dynamic_<any>): Internal.LevelVersion;
        levelDataVersion(): number;
        lastPlayed(): number;
        minecraftVersionName(): string;
        minecraftVersion(): Internal.DataVersion;
    }
    type LevelVersion_ = LevelVersion;
    class Parrot$Variant extends Internal.Enum<Internal.Parrot$Variant> implements Internal.StringRepresentable {
        static byId(arg0: number): Internal.Parrot$Variant;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static values(): Internal.Parrot$Variant[];
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.Parrot$Variant;
        getId(): number;
        get serializedName(): string
        get id(): number
        static readonly GRAY: Internal.Parrot$Variant;
        static readonly BLUE: Internal.Parrot$Variant;
        static readonly CODEC: Internal.Codec<Internal.Parrot$Variant>;
        static readonly RED_BLUE: Internal.Parrot$Variant;
        readonly id: number;
        static readonly YELLOW_BLUE: Internal.Parrot$Variant;
        static readonly GREEN: Internal.Parrot$Variant;
    }
    type Parrot$Variant_ = "yellow_blue" | Parrot$Variant | "gray" | "blue" | "red_blue" | "green";
    interface ContainerEntity extends Internal.Container, Internal.MenuProvider {
        stopOpen(arg0: Player_): void;
        tryClear(arg0: any): void;
        addChestVehicleSaveData(arg0: Internal.CompoundTag_): void;
        abstract setLootTableSeed(arg0: number): void;
        isChestVehicleEmpty(): boolean;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        abstract removeItem(arg0: number, arg1: number): Internal.ItemStack;
        getSlots(): number;
        abstract isRemoved(): boolean;
        abstract setChanged(): void;
        isChestVehicleStillValid(arg0: Player_): boolean;
        abstract position(): Vec3d;
        abstract getContainerSize(): number;
        abstract setItem(arg0: number, arg1: Internal.ItemStack_): void;
        interactWithContainerVehicle(arg0: Player_): InteractionResult;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): Internal.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        clearChestVehicleContent(): void;
        abstract removeItemNoUpdate(arg0: number): Internal.ItemStack;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_): boolean;
        abstract setLootTable(arg0: ResourceLocation_): void;
        abstract clearItemStacks(): void;
        abstract getItem(arg0: number): Internal.ItemStack;
        unpackChestVehicleLootTable(arg0: Player_): void;
        getChestVehicleSlot(arg0: number): Internal.SlotAccess;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        chestVehicleDestroyed(arg0: DamageSource_, arg1: Internal.Level_, arg2: Internal.Entity_): void;
        abstract getDisplayName(): Internal.Component;
        count(ingredient: Internal.Ingredient_): number;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        isEmpty(): boolean;
        startOpen(arg0: Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        abstract getItemStacks(): Internal.NonNullList<Internal.ItemStack>;
        abstract createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Player_): Internal.AbstractContainerMenu;
        removeChestVehicleItem(arg0: number, arg1: number): Internal.ItemStack;
        getChestVehicleItem(arg0: number): Internal.ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        shouldCloseCurrentScreen(): boolean;
        stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        readChestVehicleSaveData(arg0: Internal.CompoundTag_): void;
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        removeChestVehicleItemNoUpdate(arg0: number): Internal.ItemStack;
        abstract getLootTableSeed(): number;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        getAllItems(): Internal.List<Internal.ItemStack>;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        abstract getLootTable(): ResourceLocation;
        setChestVehicleItem(arg0: number, arg1: Internal.ItemStack_): void;
        abstract stillValid(arg0: Player_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        abstract level(): Internal.Level;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        abstract clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        set lootTableSeed(arg0: number)
        get chestVehicleEmpty(): boolean
        get slots(): number
        get removed(): boolean
        get containerSize(): number
        get width(): number
        get maxStackSize(): number
        set lootTable(arg0: ResourceLocation_)
        get displayName(): Internal.Component
        get empty(): boolean
        get itemStacks(): Internal.NonNullList<Internal.ItemStack>
        get height(): number
        get lootTableSeed(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get lootTable(): ResourceLocation
        get mutable(): boolean
    }
    type ContainerEntity_ = ContainerEntity;
    class BlockIgnoreProcessor extends Internal.StructureProcessor {
        constructor(arg0: Internal.List_<Internal.Block>)
        static readonly AIR: Internal.BlockIgnoreProcessor;
        static readonly STRUCTURE_BLOCK: Internal.BlockIgnoreProcessor;
        static readonly CODEC: Internal.Codec<Internal.BlockIgnoreProcessor>;
        static readonly STRUCTURE_AND_AIR: Internal.BlockIgnoreProcessor;
    }
    type BlockIgnoreProcessor_ = BlockIgnoreProcessor;
    class PooledByteBufAllocator extends Internal.AbstractByteBufAllocator implements Internal.ByteBufAllocatorMetricProvider {
        constructor()
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean)
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean)
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number)
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number)
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number)
        constructor(arg0: boolean)
        pinnedDirectMemory(): number;
        /**
         * @deprecated
        */
        numDirectArenas(): number;
        static defaultNumDirectArena(): number;
        /**
         * @deprecated
        */
        freeThreadLocalCache(): void;
        /**
         * @deprecated
        */
        tinyCacheSize(): number;
        metric(): Internal.ByteBufAllocatorMetric;
        static defaultSmallCacheSize(): number;
        static defaultUseCacheForAllThreads(): boolean;
        /**
         * @deprecated
        */
        normalCacheSize(): number;
        static defaultPageSize(): number;
        static defaultMaxOrder(): number;
        /**
         * @deprecated
        */
        hasThreadLocalCache(): boolean;
        /**
         * @deprecated
        */
        directArenas(): Internal.List<Internal.PoolArenaMetric>;
        /**
         * @deprecated
        */
        numHeapArenas(): number;
        /**
         * @deprecated
        */
        smallCacheSize(): number;
        /**
         * @deprecated
        */
        static defaultTinyCacheSize(): number;
        static isDirectMemoryCacheAlignmentSupported(): boolean;
        /**
         * @deprecated
        */
        heapArenas(): Internal.List<Internal.PoolArenaMetric>;
        static defaultNumHeapArena(): number;
        static defaultPreferDirect(): boolean;
        pinnedHeapMemory(): number;
        static defaultNormalCacheSize(): number;
        /**
         * @deprecated
        */
        chunkSize(): number;
        trimCurrentThreadCache(): boolean;
        /**
         * @deprecated
        */
        numThreadLocalCaches(): number;
        dumpStats(): string;
        get directMemoryCacheAlignmentSupported(): boolean
        static readonly DEFAULT: Internal.PooledByteBufAllocator;
    }
    type PooledByteBufAllocator_ = PooledByteBufAllocator;
    interface Int2LongFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.IntToLongFunction {
        composeShort(arg0: Internal.Short2IntFunction_): Internal.Short2LongFunction;
        composeReference<T>(arg0: Internal.Reference2IntFunction_<T>): Internal.Reference2LongFunction<T>;
        andThenReference<T>(arg0: Internal.Long2ReferenceFunction_<T>): Internal.Int2ReferenceFunction<T>;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        containsKey(arg0: number): boolean;
        composeInt(arg0: Internal.Int2IntFunction_): this;
        andThenFloat(arg0: Internal.Long2FloatFunction_): Internal.Int2FloatFunction;
        andThenDouble(arg0: Internal.Long2DoubleFunction_): Internal.Int2DoubleFunction;
        apply(arg0: number): number;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenLong(arg0: Internal.Long2LongFunction_): this;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Long2ShortFunction_): Internal.Int2ShortFunction;
        composeDouble(arg0: Internal.Double2IntFunction_): Internal.Double2LongFunction;
        remove(arg0: number): number;
        composeChar(arg0: Internal.Char2IntFunction_): Internal.Char2LongFunction;
        defaultReturnValue(): number;
        andThenChar(arg0: Internal.Long2CharFunction_): Internal.Int2CharFunction;
        put(arg0: number, arg1: number): number;
        andThenInt(arg0: Internal.Long2IntFunction_): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        size(): number;
        composeByte(arg0: Internal.Byte2IntFunction_): Internal.Byte2LongFunction;
        applyAsLong(arg0: number): number;
        clear(): void;
        composeLong(arg0: Internal.Long2IntFunction_): Internal.Long2LongFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        abstract get(arg0: number): number;
        composeObject<T>(arg0: Internal.Object2IntFunction_<T>): Internal.Object2LongFunction<T>;
        andThenObject<T>(arg0: Internal.Long2ObjectFunction_<T>): Internal.Int2ObjectFunction<T>;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: number): void;
        andThenByte(arg0: Internal.Long2ByteFunction_): Internal.Int2ByteFunction;
        composeFloat(arg0: Internal.Float2IntFunction_): Internal.Float2LongFunction;
        (arg0: number): number;
    }
    type Int2LongFunction_ = Int2LongFunction;
    class ViewportEvent$RenderFog extends Internal.ViewportEvent {
        constructor()
        constructor(arg0: Internal.FogRenderer$FogMode_, arg1: Internal.FogType_, arg2: Internal.Camera_, arg3: number, arg4: number, arg5: number, arg6: Internal.FogShape_)
        scaleFarPlaneDistance(arg0: number): void;
        getNearPlaneDistance(): number;
        setFogShape(arg0: Internal.FogShape_): void;
        scaleNearPlaneDistance(arg0: number): void;
        getFogShape(): Internal.FogShape;
        getMode(): Internal.FogRenderer$FogMode;
        getType(): Internal.FogType;
        setFarPlaneDistance(arg0: number): void;
        setNearPlaneDistance(arg0: number): void;
        getFarPlaneDistance(): number;
        get nearPlaneDistance(): number
        set fogShape(arg0: Internal.FogShape_)
        get fogShape(): Internal.FogShape
        get mode(): Internal.FogRenderer$FogMode
        get type(): Internal.FogType
        set farPlaneDistance(arg0: number)
        set nearPlaneDistance(arg0: number)
        get farPlaneDistance(): number
    }
    type ViewportEvent$RenderFog_ = ViewportEvent$RenderFog;
    interface MenuRegistry$ScreenFactory <H extends Internal.AbstractContainerMenu, S extends Internal.Screen & Internal.MenuAccess<H>> {
        abstract create(arg0: H, arg1: Internal.Inventory_, arg2: Internal.Component_): S;
        (arg0: H, arg1: Internal.Inventory, arg2: Internal.Component): S;
    }
    type MenuRegistry$ScreenFactory_<H extends Internal.AbstractContainerMenu, S extends Internal.Screen & Internal.MenuAccess<H>> = MenuRegistry$ScreenFactory<H, S>;
    abstract class ClientboundMoveEntityPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: boolean, arg8: boolean)
        handle(arg0: Internal.PacketListener_): void;
        abstract write(arg0: Internal.FriendlyByteBuf_): void;
        getxRot(): number;
        getyRot(): number;
        getEntity(arg0: Internal.Level_): Internal.Entity;
        hasPosition(): boolean;
        isSkippable(): boolean;
        getXa(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getZa(): number;
        getYa(): number;
        hasRotation(): boolean;
        isOnGround(): boolean;
        get xRot(): number
        get yRot(): number
        get skippable(): boolean
        get xa(): number
        get za(): number
        get ya(): number
        get onGround(): boolean
        readonly za: number;
        readonly ya: number;
        readonly xa: number;
        readonly yRot: number;
        readonly xRot: number;
        readonly hasPos: boolean;
        readonly entityId: number;
        readonly onGround: boolean;
        readonly hasRot: boolean;
    }
    type ClientboundMoveEntityPacket_ = ClientboundMoveEntityPacket;
    class ModifyResourceConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(resource: Internal.Holder_<Internal.ConfiguredPower<any, any>>, modifier: Internal.Holder_<Internal.ConfiguredModifier<any>>)
        isConfigurationValid(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        modifier(): Internal.Holder<Internal.ConfiguredModifier<any>>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        resource(): Internal.Holder<Internal.ConfiguredPower<any, any>>;
        getMissingBinds(): Internal.List<string>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.ModifyResourceConfiguration>;
    }
    type ModifyResourceConfiguration_ = ModifyResourceConfiguration;
    interface TickablePacketListener extends Internal.PacketListener {
        abstract isAcceptingMessages(): boolean;
        abstract onDisconnect(arg0: Internal.Component_): void;
        abstract tick(): void;
        shouldPropagateHandlingExceptions(): boolean;
        get acceptingMessages(): boolean
    }
    type TickablePacketListener_ = TickablePacketListener;
    class LevelChunk extends Internal.ChunkAccess implements corgitaco.corgilib.world.level.RandomTickScheduler, Internal.RandomTickScheduler, Internal.ICapabilityProviderImpl<Internal.LevelChunk> {
        constructor(arg0: Internal.Level_, arg1: Internal.ChunkPos_)
        constructor(arg0: Internal.ServerLevel_, arg1: Internal.ProtoChunk_, arg2: Internal.LevelChunk$PostLoadProcessor_)
        constructor(arg0: Internal.Level_, arg1: Internal.ChunkPos_, arg2: Internal.UpgradeData_, arg3: Internal.LevelChunkTicks_<Internal.Block>, arg4: Internal.LevelChunkTicks_<Internal.Fluid>, arg5: number, arg6: Internal.LevelChunkSection_[], arg7: Internal.LevelChunk$PostLoadProcessor_, arg8: Internal.BlendingData_)
        clearAllBlockEntities(): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.LevelChunk>): boolean;
        getMinSection(): number;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getMaxSection(): number;
        getBiomeFabric(pos: BlockPos_): Internal.Holder<Internal.Biome>;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        setLoaded(arg0: boolean): void;
        getSectionYFromSectionIndex(arg0: number): number;
        static create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        registerAllBlockEntitiesAfterLevelLoad(): void;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        getFluidState(arg0: number, arg1: number, arg2: number): Internal.FluidState;
        invalidateCaps(): void;
        addAndRegisterBlockEntity(arg0: Internal.BlockEntity_): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        replaceWithPacketData(arg0: Internal.FriendlyByteBuf_, arg1: Internal.CompoundTag_, arg2: Internal.Consumer_<Internal.ClientboundLevelChunkPacketData$BlockEntityTagOutput>): void;
        unregisterTickContainerFromLevel(arg0: Internal.ServerLevel_): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getSectionsCount(): number;
        getSectionIndexFromSectionY(arg0: number): number;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        abstract getScheduledRandomTicks(): Internal.List<BlockPos>;
        getBlockEntity(arg0: BlockPos_, arg1: Internal.LevelChunk$EntityCreationType_): Internal.BlockEntity;
        getSectionIndex(arg0: number): number;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        isEmpty(): boolean;
        getMaxBuildHeight(): number;
        getBlockEntityRenderData(pos: BlockPos_): any;
        getLevel(): Internal.Level;
        unpackTicks(arg0: number): void;
        isTicking(arg0: BlockPos_): boolean;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        runPostLoad(): void;
        postProcessGeneration(): void;
        handler$zgg000$fabric_data_attachment_api_v1$transferProtoChunkAttachement(world: Internal.ServerLevel_, protoChunk: Internal.ProtoChunk_, entityLoader: Internal.LevelChunk$PostLoadProcessor_, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        readCapsFromNBT(arg0: Internal.CompoundTag_): void;
        getModelDataManager(): Internal.ModelDataManager;
        getFullStatus(): Internal.FullChunkStatus;
        /**
         * @deprecated
        */
        writeCapsToNBT(): Internal.CompoundTag;
        isOutsideBuildHeight(arg0: number): boolean;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        getWorldForge(): Internal.Level;
        setFullStatus(arg0: Internal.Supplier_<Internal.FullChunkStatus>): void;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        registerTickContainerInLevel(arg0: Internal.ServerLevel_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        replaceBiomes(arg0: Internal.FriendlyByteBuf_): void;
        hasBiomes(): boolean;
        getBlockEntities(): Internal.Map<BlockPos, Internal.BlockEntity>;
        getMaxLightLevel(): number;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        reviveCaps(): void;
        static traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get minSection(): number
        get maxSection(): number
        set loaded(arg0: boolean)
        get sectionsCount(): number
        get scheduledRandomTicks(): Internal.List<BlockPos>
        get empty(): boolean
        get maxBuildHeight(): number
        get level(): Internal.Level
        get modelDataManager(): Internal.ModelDataManager
        get fullStatus(): Internal.FullChunkStatus
        get worldForge(): Internal.Level
        set fullStatus(arg0: Internal.Supplier_<Internal.FullChunkStatus>)
        get blockEntities(): Internal.Map<BlockPos, Internal.BlockEntity>
        get maxLightLevel(): number
        readonly level: Internal.Level;
        static readonly LOGGER: Internal.Log4jLogger;
    }
    type LevelChunk_ = LevelChunk;
    class User$Type extends Internal.Enum<Internal.User$Type> {
        getName(): string;
        static valueOf(arg0: string): Internal.User$Type;
        static byName(arg0: string): Internal.User$Type;
        static values(): Internal.User$Type[];
        get name(): string
        static readonly LEGACY: Internal.User$Type;
        static readonly MSA: Internal.User$Type;
        static readonly MOJANG: Internal.User$Type;
    }
    type User$Type_ = User$Type | "mojang" | "msa" | "legacy";
    class MutableHashedLinkedMap <K, V> implements Internal.Iterable<Internal.Map$Entry<K, V>> {
        constructor()
        constructor(arg0: Internal.Hash$Strategy_<K>, arg1: any_<K, V>)
        constructor(arg0: Internal.Hash$Strategy_<K>)
        spliterator(): Internal.Spliterator<Internal.Map$Entry<K, V>>;
        put(arg0: K, arg1: V): V;
        putFirst(arg0: K, arg1: V): V;
        get(arg0: K): V;
        iterator(): Internal.Iterator<Internal.Map$Entry<K, V>>;
        contains(arg0: K): boolean;
        putAfter(arg0: K, arg1: K, arg2: V): V;
        isEmpty(): boolean;
        putBefore(arg0: K, arg1: K, arg2: V): V;
        forEach(arg0: Internal.Consumer_<Internal.Map$Entry<K, V>>): void;
        remove(arg0: K): V;
        get empty(): boolean
        static readonly IDENTITY: Internal.MutableHashedLinkedMap$IdentityStrategy;
        static readonly BASIC: Internal.MutableHashedLinkedMap$BasicStrategy;
    }
    type MutableHashedLinkedMap_<K, V> = MutableHashedLinkedMap<K, V>;
    class Ceraunus extends Internal.Item implements Internal.More_Tool_Attribute {
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
        static getThrownUuid(arg0: Internal.ItemStack_): Internal.UUID;
        setDigSpeed(speed: number): void;
        static getPowerForTime(arg0: number): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
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
    type Ceraunus_ = Ceraunus;
    class ArcaneAnvilBlock extends Internal.FallingBlock {
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
        onBrokenAfterFall(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FallingBlockEntity_): void;
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
        getFallDamageSource(arg0: Internal.Entity_): DamageSource;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly FACING: Internal.DirectionProperty;
    }
    type ArcaneAnvilBlock_ = ArcaneAnvilBlock;
    interface RenderMaterial extends Internal.MaterialView {
        abstract emissive(): boolean;
        /**
         * @deprecated
        */
        spriteDepth(): number;
        abstract disableDiffuse(): boolean;
        abstract ambientOcclusion(): Internal.TriState;
        abstract glint(): Internal.TriState;
        abstract blendMode(): net.fabricmc.fabric.api.renderer.v1.material.BlendMode;
        abstract disableColorIndex(): boolean;
        readonly MATERIAL_STANDARD: ResourceLocation;
    }
    type RenderMaterial_ = RenderMaterial;
    interface UserPrincipal extends Internal.Principal {
        abstract hashCode(): number;
        abstract toString(): string;
        abstract getName(): string;
        abstract equals(arg0: any): boolean;
        implies(arg0: Internal.Subject_): boolean;
        get name(): string
    }
    type UserPrincipal_ = UserPrincipal;
    class RedstoneWallTorchBlock extends Internal.RedstoneTorchBlock {
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
        static readonly FACING: Internal.DirectionProperty;
        static readonly LIT: Internal.BooleanProperty;
    }
    type RedstoneWallTorchBlock_ = RedstoneWallTorchBlock;
    class ContextUtils$ArrowEntityHitContext {
        constructor(result: Internal.EntityHitResult_, entity: Internal.AbstractArrow_)
        /**
         * The result of the hit on the entity
        */
        readonly result: Internal.EntityHitResult;
        /**
         * The abstract arrow entity
        */
        readonly entity: Internal.AbstractArrow;
    }
    type ContextUtils$ArrowEntityHitContext_ = ContextUtils$ArrowEntityHitContext;
    class Turtle extends Internal.Animal {
        constructor(arg0: Internal.EntityType_<Internal.Turtle>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        static m_218274_(arg0: Internal.Turtle_): Internal.RandomSource;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        swing(): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getHomePos(): BlockPos;
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
        setTravelling(arg0: boolean): void;
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
        isLayingEgg(): boolean;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        static checkTurtleSpawnRules(arg0: Internal.EntityType_<Internal.Turtle>, arg1: Internal.LevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
        static m_218272_(arg0: Internal.Turtle_): Internal.RandomSource;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isTravelling(): boolean;
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
        getTravelPos(): BlockPos;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        getName(): Internal.Component;
        setLayingEgg(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        setGoingHome(arg0: boolean): void;
        setTravelPos(arg0: BlockPos_): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        setHomePos(arg0: BlockPos_): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        setHasEgg(arg0: boolean): void;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        isGoingHome(): boolean;
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
        hasEgg(): boolean;
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
        get homePos(): BlockPos
        get living(): boolean
        get totalMovementSpeed(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        set travelling(arg0: boolean)
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
        get layingEgg(): boolean
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get potionEffects(): Internal.EntityPotionEffectsJS
        get travelling(): boolean
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
        get travelPos(): BlockPos
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        set layingEgg(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        set goingHome(arg0: boolean)
        set travelPos(arg0: BlockPos_)
        set totalMovementSpeedMultiplier(speed: number)
        set homePos(arg0: BlockPos_)
        set hasEgg(arg0: boolean)
        get goingHome(): boolean
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
        static readonly BABY_ON_LAND_SELECTOR: Internal.Predicate<Internal.LivingEntity>;
        layEggCounter: number;
        static readonly FOOD_ITEMS: Internal.Ingredient;
    }
    type Turtle_ = Turtle;
    class ScreenEvent$MouseButtonReleased$Post extends Internal.ScreenEvent$MouseButtonReleased {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number, arg4: boolean)
        wasHandled(): boolean;
    }
    type ScreenEvent$MouseButtonReleased$Post_ = ScreenEvent$MouseButtonReleased$Post;
    class ArrayRecipeComponent <T> extends Internal.Record implements Internal.RecipeComponent<T[]> {
        constructor(component: Internal.RecipeComponent_<T>, canWriteSelf: boolean, arrayClass: typeof any, emptyArray: T[])
        replaceOutput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_, arg3: Internal.OutputReplacement_): any;
        addAll(array: T[], ...values: T[]): T[];
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<T[]>;
        arrayClass(): typeof any;
        key(name: string): Internal.RecipeKey<T[]>;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T[]>, map: Internal.Map_<any, any>): void;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, T[]>>;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T[]>, json: Internal.JsonObject_): void;
        isInput(recipe: Internal.RecipeJS_, value: T[], match: Internal.ReplacementMatch_): boolean;
        orSelf(): Internal.RecipeComponent<T[]>;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        component(): Internal.RecipeComponent<T>;
        replaceOutput(recipe: Internal.RecipeJS_, original: T[], match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): T[];
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<T[]>;
        add(array: T[], value: T): T[];
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        remove(array: T[], index: number): T[];
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, T[]>>;
        componentType(): string;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<T[], O>;
        newArray(length: number): T[];
        replaceInput(recipe: Internal.RecipeJS_, original: T[], match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): T[];
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<T[], O>;
        static builder(): Internal.RecipeComponentBuilder;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        read(recipe: Internal.RecipeJS_, from: any): T[];
        emptyArray(): T[];
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<T[]>;
        isOutput(recipe: Internal.RecipeJS_, value: T[], match: Internal.ReplacementMatch_): boolean;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<T[]>;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T[]>, json: Internal.JsonObject_): void;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<T[]>;
        isOutput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        replaceInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_, arg3: Internal.InputReplacement_): any;
        checkEmpty(key: Internal.RecipeKey_<T[]>, value: T[]): string;
        checkValueHasChanged(oldValue: T[], newValue: T[]): boolean;
        write(recipe: Internal.RecipeJS_, value: T[]): Internal.JsonElement;
        canWriteSelf(): boolean;
        isInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        asArray(): Internal.ArrayRecipeComponent<T[]>;
    }
    type ArrayRecipeComponent_<T> = ArrayRecipeComponent<T>;
    interface SerializableTickContainer <T> {
        abstract save(arg0: number, arg1: Internal.Function_<T, string>): Internal.Tag;
        (arg0: number, arg1: Internal.Function<T, string>): Internal.Tag_;
    }
    type SerializableTickContainer_<T> = SerializableTickContainer<T>;
    class ConsumeItemAction extends Internal.ItemAction<Internal.FieldConfiguration<number>> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        execute(arg0: Internal.FieldConfiguration_<number>, arg1: Internal.Level_, arg2: Internal.Mutable_<Internal.ItemStack>): void;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type ConsumeItemAction_ = ConsumeItemAction;
    abstract class AbstractIntSet extends Internal.AbstractIntCollection implements Internal.Cloneable, Internal.IntSet {
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        static of(arg0: number, arg1: number): Internal.IntSet;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        static of(): Internal.IntSet;
        forEach(arg0: Internal.IntConsumer_): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        intStream(): Internal.IntStream;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        static of<E>(arg0: E, arg1: E): Internal.Set<E>;
        static of(arg0: number, arg1: number, arg2: number): Internal.IntSet;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        intParallelStream(): Internal.IntStream;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        spliterator(): Internal.IntSpliterator;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        intIterator(): Internal.IntIterator;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        removeIf(arg0: Internal.IntPredicate_): boolean;
        remove(arg0: number): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        abstract toArray<T>(arg0: T[]): T[];
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        static of(arg0: number): Internal.IntSet;
        intSpliterator(): Internal.IntSpliterator;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        static of(...arg0: number[]): Internal.IntSet;
        static of<E>(arg0: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        static of<E>(...arg0: E[]): Internal.Set<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
    }
    type AbstractIntSet_ = AbstractIntSet;
    interface Policy <K, V> {
        abstract eviction(): Internal.Optional<Internal.Policy$Eviction<K, V>>;
        abstract expireVariably(): Internal.Optional<Internal.Policy$VarExpiration<K, V>>;
        abstract refreshes(): Internal.Map<K, Internal.CompletableFuture<V>>;
        getEntryIfPresentQuietly(arg0: K): Internal.Policy$CacheEntry<K, V>;
        abstract refreshAfterWrite(): Internal.Optional<Internal.Policy$FixedRefresh<K, V>>;
        abstract isRecordingStats(): boolean;
        abstract getIfPresentQuietly(arg0: K): V;
        abstract expireAfterWrite(): Internal.Optional<Internal.Policy$FixedExpiration<K, V>>;
        abstract expireAfterAccess(): Internal.Optional<Internal.Policy$FixedExpiration<K, V>>;
        get recordingStats(): boolean
    }
    type Policy_<K, V> = Policy<K, V>;
    class LanguageManager implements Internal.ResourceManagerReloadListener, Internal.IdentifiableResourceReloadListener {
        constructor(arg0: string)
        getSelected(): string;
        getLanguage(arg0: string): Internal.LanguageInfo;
        setSelected(arg0: string): void;
        getName(): string;
        onResourceManagerReload(arg0: Internal.ResourceManager_): void;
        getJavaLocale(): Internal.Locale;
        getFabricDependencies(): Internal.Collection<any>;
        getFabricId(): ResourceLocation;
        getLanguages(): Internal.SortedMap<string, Internal.LanguageInfo>;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get selected(): string
        set selected(arg0: string)
        get name(): string
        get javaLocale(): Internal.Locale
        get fabricDependencies(): Internal.Collection<any>
        get fabricId(): ResourceLocation
        get languages(): Internal.SortedMap<string, Internal.LanguageInfo>
        static readonly DEFAULT_LANGUAGE_CODE: "en_us";
    }
    type LanguageManager_ = LanguageManager;
    interface ShortList extends Internal.ShortCollection, Internal.List<number>, Internal.Comparable<Internal.List<number>> {
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        sort(arg0: Internal.ShortComparator_): void;
        abstract addAll(arg0: number, arg1: Internal.ShortCollection_): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        forEach(arg0: Internal.ShortConsumer_): void;
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        /**
         * @deprecated
        */
        add(arg0: number, arg1: any): void;
        of<E>(arg0: E): Internal.List<E>;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        intStream(): Internal.IntStream;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        intParallelStream(): Internal.IntStream;
        replaceAll(arg0: Internal.ShortUnaryOperator_): void;
        intIterator(): Internal.IntIterator;
        abstract set(arg0: number, arg1: number): number;
        listIterator(): Internal.ListIterator<any>;
        abstract add(arg0: number, arg1: number): void;
        abstract size(arg0: number): void;
        removeIf(arg0: Internal.IntPredicate_): boolean;
        of(arg0: number, arg1: number, arg2: number): this;
        addAll(arg0: number, arg1: Internal.ShortList_): boolean;
        of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        indexOf(arg0: any): number;
        abstract toArray<T>(arg0: T[]): T[];
        abstract removeShort(arg0: number): number;
        of(arg0: number): this;
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        abstract addAll(arg0: Internal.ShortCollection_): boolean;
        abstract retainAll(arg0: Internal.ShortCollection_): boolean;
        abstract getElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        unstableSort(arg0: Internal.ShortComparator_): void;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        abstract addElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        of<E>(arg0: E, arg1: E): Internal.List<E>;
        addAll(arg0: Internal.ShortList_): boolean;
        abstract indexOf(arg0: number): number;
        spliterator(): Internal.Spliterator<any>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        abstract addElements(arg0: number, arg1: number[]): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        /**
         * @deprecated
        */
        set(arg0: number, arg1: any): any;
        /**
         * @deprecated
        */
        lastIndexOf(arg0: any): number;
        abstract containsAll(arg0: Internal.ShortCollection_): boolean;
        abstract removeElements(arg0: number, arg1: number): void;
        abstract add(arg0: number): boolean;
        /**
         * @deprecated
        */
        remove(arg0: number): any;
        abstract listIterator(arg0: number): Internal.ShortListIterator;
        setElements(arg0: number, arg1: number[]): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        abstract removeAll(arg0: Internal.ShortCollection_): boolean;
        abstract addAll(arg0: Internal.Collection_<number>): boolean;
        abstract isEmpty(): boolean;
        abstract addAll(arg0: number, arg1: Internal.Collection_<number>): boolean;
        forEach(arg0: Internal.IntConsumer_): void;
        abstract getShort(arg0: number): number;
        setElements(arg0: number[]): void;
        of<E>(...arg0: E[]): Internal.List<E>;
        abstract lastIndexOf(arg0: number): number;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        /**
         * @deprecated
        */
        add(arg0: number, arg1: number): void;
        of(arg0: number, arg1: number): this;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        /**
         * @deprecated
        */
        replaceAll(arg0: Internal.UnaryOperator_<number>): void;
        abstract compareTo(arg0: Internal.List_<number>): number;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        abstract contains(arg0: number): boolean;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        /**
         * @deprecated
        */
        unstableSort(arg0: Internal.Comparator_<number>): void;
        iterator(): Internal.Iterator<any>;
        of(...arg0: number[]): this;
        removeIf(arg0: Internal.ShortPredicate_): boolean;
        replaceAll(arg0: Internal.IntUnaryOperator_): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        abstract toArray(): any[];
        intSpliterator(): Internal.IntSpliterator;
        subList(arg0: number, arg1: number): Internal.List<any>;
        abstract hashCode(): number;
        abstract size(): number;
        abstract toShortArray(): number[];
        /**
         * @deprecated
        */
        toShortArray(arg0: number[]): number[];
        abstract clear(): void;
        /**
         * @deprecated
        */
        sort(arg0: Internal.Comparator_<number>): void;
        abstract toArray(arg0: number[]): number[];
        of(): this;
        /**
         * @deprecated
        */
        get(arg0: number): number;
        abstract rem(arg0: number): boolean;
        setElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        abstract equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        set(arg0: number, arg1: number): number;
        get empty(): boolean
        set elements(arg0: number[])
    }
    type ShortList_ = ShortList;
    class GiantTrunkPlacer extends Internal.TrunkPlacer {
        constructor(arg0: number, arg1: number, arg2: number)
        static readonly CODEC: Internal.Codec<Internal.GiantTrunkPlacer>;
    }
    type GiantTrunkPlacer_ = GiantTrunkPlacer;
}

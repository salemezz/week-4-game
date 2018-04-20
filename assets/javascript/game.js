$(document).ready(function() {
    var obiWan = {
        healthPoints: 120,
        attackPower: 9,
        baseAttackPower: 3,
        counterAttackPower: 10
    };
    var luke = {
        healthPoints: 100,
        attackPower: 10,
        baseAttackPower: 6, 
        counterAttackPower: 10
    };
    var sidious = {
        healthPoints: 150,
        attackPower: 8,
        baseAttackPower: 4, 
        counterAttackPower: 10
    };
    var maul = {
        healthPoints: 180,
        attackPower: 8,
        baseAttackPower: 2, 
        counterAttackPower: 10
    };
   
    var selectedCharacter = undefined;
    var selectedCharacterHtml = undefined;
    var selectedDefender = undefined;
    var selectedDefenderHtml = undefined;
    var selectedCharacterButton = undefined;
    var remainingOponents = 3;
var game = {
    initialize: function () {
    
    obiWan = {
        healthPoints: 120,
        attackPower: 9,
        baseAttackPower: 3,
        counterAttackPower: 10
    };
    luke = {
        healthPoints: 100,
        attackPower: 10,
        baseAttackPower: 6, 
        counterAttackPower: 10
    };
    sidious = {
        healthPoints: 150,
        attackPower: 8,
        baseAttackPower: 4, 
        counterAttackPower: 10
    };
    maul = {
        healthPoints: 180,
        attackPower: 8,
        baseAttackPower: 2, 
        counterAttackPower: 10
    };
   
    selectedCharacter = undefined;
    selectedCharacterHtml = undefined;
    selectedDefender = undefined;
    selectedDefenderHtml = undefined;
    selectedCharacterButton = undefined;
    remainingOponents = 3;

    $("#gameAction").html("Select a Character.");
    $("#obiButton").removeClass("hidden").find(".health").text(obiWan.healthPoints);
    $("#lukeButton").removeClass("hidden").find(".health").text(luke.healthPoints);
    $("#sidiousButton").removeClass("hidden").find(".health").text(sidious.healthPoints);
    $("#maulButton").removeClass("hidden").find(".health").text(maul.healthPoints);
    $("#defenderObiButton").addClass("hidden").find(".health").text(obiWan.healthPoints);
    $("#defenderLukeButton").addClass("hidden").find(".health").text(luke.healthPoints);
    $("#defenderSidiousButton").addClass("hidden").find(".health").text(sidious.healthPoints);
    $("#defenderMaulButton").addClass("hidden").find(".health").text(maul.healthPoints);
    $("#enemyObiButton").addClass("hidden").find(".health").text(obiWan.healthPoints);
    $("#enemyLukeButton").addClass("hidden").find(".health").text(luke.healthPoints);
    $("#enemySidiousButton").addClass("hidden").find(".health").text(sidious.healthPoints);
    $("#enemyMaulButton").addClass("hidden").find(".health").text(maul.healthPoints);
    
    
    }
} //closes game
//I TOOK THESE FUNCTIONS OUT OF INITIALIZE FUNTION BECAUSE YOU DON'T WANT TO RECREATE THESE FUNCTIONS EVERY TIME YOU RESET THE GAME
    function decreaseCharacterHealth() {
        if(selectedCharacterHtml && selectedCharacter) {
            selectedCharacter.healthPoints -= selectedDefender.counterAttackPower;
            $(selectedCharacterHtml).find(".health").text(selectedCharacter.healthPoints);   
        }
        if (selectedCharacter.healthPoints <= 0) {
            $(selectedCharacterHtml).addClass("hidden");
            $("#gameAction").html("YOU DIED.");                                             
        }
    };
    function decreaseDefenderHealth() {
        if(selectedDefender && selectedCharacterHtml) {
            selectedDefender.healthPoints -= selectedCharacter.attackPower;
            $(selectedDefenderHtml).find(".health").text(selectedDefender.healthPoints)
            selectedCharacter.attackPower += selectedCharacter.baseAttackPower;
        }  
    };
    function youWin() {
        if (remainingOponents <= 0) {
            $("#gameAction").html("YOU WIN.");
            $("#restartButton").removeClass("hidden")
        }
    }
//YOU DON'T WANT THE ON CLICK EVENTS INSIDE OF THE INITIALIZE FUNCTION BECAUSE YOU'LL ACCIDENTALLY SET MORE THAN ONE EVENT ON EACH ELEMENT
// Character Selection - THESE HAD "ONE" INSTEAD OF "ON" SO I CHANGED IT
        $( "#obiButton" ).on("click", function () {
            $( "#characterSelection button" ).not(" #obiButton").addClass("hidden");
            $( "#enemyZone button" ).not("#enemyObiButton").removeClass("hidden");
            $("#gameAction").html("Select an Opponent.")
            selectedCharacter = obiWan;
            selectedCharacterHtml = $(this);
        });
        $( "#lukeButton" ).on("click", function () {
            $( "#characterSelection button" ).not(" #lukeButton").addClass("hidden");
            $( "#enemyZone button" ).not("#enemyLukeButton").removeClass("hidden");
            $("#gameAction").html("Select an Opponent.")
            selectedCharacter = luke;
            selectedCharacterHtml = $(this);
        });
        $( "#sidiousButton" ).on("click", function () {
            $( "#characterSelection button" ).not(" #sidiousButton").addClass("hidden");
            $( "#enemyZone button" ).not("#enemySidiousButton").removeClass("hidden");
            $("#gameAction").html("Select an Opponent.")
            selectedCharacter = sidous;
            selectedCharacterHtml = $(this);
        });
        $( "#maulButton" ).on("click", function () {
            $( "#characterSelection button" ).not(" #maulButton").addClass("hidden");
            $( "#enemyZone button" ).not("#enemyMaulButton").removeClass("hidden");
            $("#gameAction").html("Select an Opponent.")
            selectedCharacter = sidous;
            selectedCharacterHtml = $(this);
        });
// Enemy Selection
        $( "#lukeButton" ).on("click", function () {
            $( "#characterSelection button" ).not(" #lukeButton").addClass("hidden");
            $( "#enemyZone button" ).not("#enemyLukeButton").removeClass("hidden");
        });
        $("#enemyLukeButton").on("click", function() {
            $("#enemyLukeButton").addClass("hidden")
            $("#defenderLukeButton").removeClass("hidden");
            $("#gameAction").html("Click Luke to attack him, and be careful.")
            
            selectedDefender = luke;
            selectedDefenderHtml = $("#defenderLukeButton")
        });   
        $( "#obiButton" ).on("click", function () {
            $( "#characterSelection button" ).not("#obiButton").addClass("hidden");
            $( "#enemyZone button" ).not("#enemyObiButton").removeClass("hidden");
        });
        $("#enemyObiButton").on("click", function() {
            $("#enemyObiButton").addClass("hidden")
            $("#defenderObiButton").removeClass("hidden");
            $("#gameAction").html("Click Obi to attack him, and be careful.");
            
            selectedDefender = obiWan;
            selectedDefenderHtml = $("#defenderObiButton");
        });
        $( "#sidiousButton" ).on("click", function () {
            $( "#characterSelection button" ).not("#sidiousButton").addClass("hidden");
            $( "#enemyZone button" ).not("#enemySidiousButton").removeClass("hidden");
        })
        $("#enemySidiousButton").on("click", function() {
            $("#enemySidiousButton").addClass("hidden")
            $("#defenderSidiousButton").removeClass("hidden");
            $("#gameAction").html("Click Sidious to attack him, and be careful.");
            
            selectedDefender = sidious;
            selectedDefenderHtml = $("#defenderSidiousButton");
        });
        $( "#maulButton" ).on("click", function () {
            $( "#characterSelection button" ).not("#maulButton").addClass("hidden");
            $( "#enemyZone button" ).not("#enemyMaulButton").removeClass("hidden");
        })
        $("#enemyMaulButton").on("click", function() {
            $("#enemyMaulButton").addClass("hidden")
            $("#defenderMaulButton").removeClass("hidden");
            $("#gameAction").html("Click Maul to attack him, and be careful.");
            
            selectedDefender = maul;
            selectedDefenderHtml = $("#defenderMaulButton");
        });
        
// Attack Enemy
        $("#defenderLukeButton").on("click", function() {
            decreaseDefenderHealth();               
            if(luke.healthPoints <= 0) {
                remainingOponents--;
                $("#defenderLukeButton").addClass("hidden");
                $("#gameAction").html("You defeated Luke, choose another opponenet.");
                youWin();
            }
            else {
                decreaseCharacterHealth();
            }
        });
        $("#defenderObiButton").on("click", function() {
            decreaseDefenderHealth();               
            if(obiWan.healthPoints <= 0) {
                remainingOponents--;
                $("#defenderObiButton").addClass("hidden");
                $("#gameAction").html("You defeated Obi, choose another opponenet.");
                youWin();
            }
            else {
                decreaseCharacterHealth();
            }
        });
        $("#defenderSidiousButton").on("click", function() {
            decreaseDefenderHealth();               
            if(sidious.healthPoints <= 0) {
                remainingOponents--;
                $("#defenderSidiousButton").addClass("hidden");
                $("#gameAction").html("You defeated Sidious, choose another opponenet.");
            }
            else {
                decreaseCharacterHealth();
            }
        }); 
        $("#defenderMaulButton").on("click", function() {
            decreaseDefenderHealth();               
            if(maul.healthPoints <= 0) {
                remainingOponents--;
                $("#defenderMaulButton").addClass("hidden");
                $("#gameAction").html("You defeated Maul, choose another opponenet.");
                youWin();
            }
                            else {
                decreaseCharacterHealth();
            }
        });                                    
//     }
// }
$("#restartButton").click(function() {
game.initialize();
});
game.initialize();
});
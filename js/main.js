$("#check").on('click', function(){
    //let test = (Number($("#test_1").val()) + Number($("#test_2").val())) * 0.1;

    let rep = (
        Number($("#rep_1").val()) +
        Number($("#rep_2").val()) +
        Number($("#rep_3").val()) +
        Number($("#rep_4").val()) +
        Number($("#rep_5").val()) +
        Number($("#rep_6").val()) +
        Number($("#rep_7").val()) +
        Number($("#rep_8").val()) +
        Number($("#rep_9").val()) +
        Number($("#rep_10").val()) +
        Number($("#rep_11").val()) +
        Number($("#rep_12").val()) +
        Number($("#rep_13").val()) +
        Number($("#rep_14").val()) +
        Number($("#rep_15").val())
    ) / 37.5;
    
    $("#result").text("科目評価100のうち，レポートで" + rep + "点あるので，" + (60 - rep) * 1.66 + "点以上とればおｋ");
})

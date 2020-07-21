button1 = document.getElementById("one");
button2 = document.getElementById("two");
button3 = document.getElementById("three");
button4 = document.getElementById("four");
button5 = document.getElementById("five");
button6 = document.getElementById("six");
button7 = document.getElementById("seven");
button8 = document.getElementById("eight");
button9 = document.getElementById("nine");
buttonR = document.getElementById("reset");
sqcap1 = "Empty";
sqcap2 = "Empty";
sqcap3 = "Empty";
sqcap4 = "Empty";
sqcap5 = "Empty";
sqcap6 = "Empty";
sqcap7 = "Empty";
sqcap8 = "Empty";
sqcap9 = "Empty";
sqch1 = 0;
sqch2 = 0;
sqch3 = 0;
sqch4 = 0;
sqch5 = 0;
sqch6 = 0;
sqch7 = 0;
sqch8 = 0;
sqch9 = 0;
last = 0;
sqgroup = [];
function selsq() {
  if (last == 1) {
    sqgroup = [];
    sqch1=Math.floor(Math.random()*Math.floor(84)+1);
    sqch2=Math.floor(Math.random()*Math.floor(73)+1);
    sqch3=Math.floor(Math.random()*Math.floor(43)+1);
    sqch4=Math.floor(Math.random()*Math.floor(69)+1);
    sqch5=Math.floor(Math.random()*Math.floor(51)+1);
    sqch6=Math.floor(Math.random()*Math.floor(37)+1);
    sqch7=Math.floor(Math.random()*Math.floor(28)+1);
    sqch8=Math.floor(Math.random()*Math.floor(16)+1);
    sqch9=Math.floor(Math.random()*Math.floor(7)+1);
    sqch1.push(sqgroup);
    sqch2.push(sqgroup);
    sqch3.push(sqgroup);
    sqch4.push(sqgroup);
    sqch5.push(sqgroup);
    sqch6.push(sqgroup);
    sqch7.push(sqgroup);
    sqch8.push(sqgroup);
    sqch9.push(sqgroup);
    if (Math.max(sqgroup) == sqch1 && sqcap1 == "Empty") {
      document.body.classList.add("sq1-cpu");
      sqcap1 = "CPU";
    } else if (Math.max(sqgroup) == sqch1 && sqcap1 != "Empty" || Math.max(sqgroup) != sqch1) {
      sqgroup.shift();
      if (Math.max(sqgroup) == sqch2 && sqcap2 == "Empty") {
        document.body.classList.add("sq2-cpu");
        sqcap2 = "CPU";
      } else if (Math.max(sqgroup) == sqch2 && sqcap2 != "Empty" || Math.max(sqgroup) != sqch2) {
          sqgroup.shift();
          if (Math.max(sqgroup) == sqch3 && sqcap3 == "Empty") {
            document.body.classList.add("sq3-cpu");
            sqcap3 = "CPU";
        } else if (Math.max(sqgroup) == sqch3 && sqcap3 != "Empty" || Math.max(sqgroup) != sqch3) {
            sqgroup.shift();
            if (Math.max(sqgroup) == sqch4 && sqcap4 == "Empty") {
              document.body.classList.add("sq4-cpu");
              sqcap4 = "CPU";
            } else if (Math.max(sqgroup) == sqch4 && sqcap4 != "Empty" || Math.max(sqgroup) != sqch4) {
              sqgroup.shift();
              if (Math.max(sqgroup) == sqch5 && sqcap5 == "Empty") {
                document.body.classList.add("sq5-cpu");
                sqcap5 = "CPU";
              } else if (Math.max(sqgroup) == sqch5 && sqcap5 != "Empty" || Math.max(sqgroup) != sqch5) {
                  sqgroup.shift();
                  if (Math.max(sqgroup) == sqch6 && sqcap6 == "Empty") {
                    document.body.classList.add("sq6-cpu");
                    sqcap6 = "CPU";
                } else if (Math.max(sqgroup) == sqch6 && sqcap6 != "Empty" || Math.max(sqgroup) != sqch6) {
                    sqgroup.shift();
                    if (Math.max(sqgroup) == sqch7 && sqcap7 == "Empty") {
                      document.body.classList.add("sq7-cpu");
                      sqcap7 = "CPU";
                    } else if (Math.max(sqgroup) == sqch7 && sqcap7 != "Empty" || Math.max(sqgroup) != sqch7) {
                      sqgroup.shift();
                      if (Math.max(sqgroup) == sqch8 && sqcap8 == "Empty") {
                        document.body.classList.add("sq8-cpu");
                        sqcap8 = "CPU";
                      } else if (Math.max(sqgroup) == sqch8 && sqcap8 != "Empty" || Math.max(sqgroup) != sqch8) {
                          sqgroup.shift();
                          if (Math.max(sqgroup) == sqch9 && sqcap9 == "Empty") {
                            document.body.classList.add("sq9-cpu");
                            sqcap9 = "CPU";
                        } else if (Math.max(sqgroup) == sqch9 && sqcap9 != "Empty" || Math.max(sqgroup) != sqch9) {
                            sqgroup.shift();
                        }
                      }
                    }
                }
              }
            }
        }
      }
    };
  } else if (last == 2) {
    sqgroup = [];
    sqch1=Math.floor(Math.random()*Math.floor(73)+1);
    sqch2=Math.floor(Math.random()*Math.floor(84)+1);
    sqch3=Math.floor(Math.random()*Math.floor(69)+1);
    sqch4=Math.floor(Math.random()*Math.floor(62)+1);
    sqch5=Math.floor(Math.random()*Math.floor(71)+1);
    sqch6=Math.floor(Math.random()*Math.floor(61)+1);
    sqch7=Math.floor(Math.random()*Math.floor(35)+1);
    sqch8=Math.floor(Math.random()*Math.floor(27)+1);
    sqch9=Math.floor(Math.random()*Math.floor(9)+1);
    sqch1.push(sqgroup);
    sqch2.push(sqgroup);
    sqch3.push(sqgroup);
    sqch4.push(sqgroup);
    sqch5.push(sqgroup);
    sqch6.push(sqgroup);
    sqch7.push(sqgroup);
    sqch8.push(sqgroup);
    sqch9.push(sqgroup);
    if (Math.max(sqgroup) == sqch1 && sqcap1 == "Empty") {
      document.body.classList.add("sq1-cpu");
      sqcap1 = "CPU";
    } else if (Math.max(sqgroup) == sqch1 && sqcap1 != "Empty" || Math.max(sqgroup) != sqch1) {
      sqgroup.shift();
      selsq();
      if (Math.max(sqgroup) == sqch2 && sqcap2 == "Empty") {
        document.body.classList.add("sq2-cpu");
        sqcap2 = "CPU";
      } else if (Math.max(sqgroup) == sqch2 && sqcap2 != "Empty" || Math.max(sqgroup) != sqch2) {
          sqgroup.shift();
          selsq();
          if (Math.max(sqgroup) == sqch3 && sqcap3 == "Empty") {
            document.body.classList.add("sq3-cpu");
            sqcap3 = "CPU";
        } else if (Math.max(sqgroup) == sqch3 && sqcap3 != "Empty" || Math.max(sqgroup) != sqch3) {
            sqgroup.shift();
            selsq();
            if (Math.max(sqgroup) == sqch4 && sqcap4 == "Empty") {
              document.body.classList.add("sq4-cpu");
              sqcap4 = "CPU";
            } else if (Math.max(sqgroup) == sqch4 && sqcap4 != "Empty" || Math.max(sqgroup) != sqch4) {
              sqgroup.shift();
              selsq();
              if (Math.max(sqgroup) == sqch5 && sqcap5 == "Empty") {
                document.body.classList.add("sq5-cpu");
                sqcap5 = "CPU";
              } else if (Math.max(sqgroup) == sqch5 && sqcap5 != "Empty" || Math.max(sqgroup) != sqch5) {
                  sqgroup.shift();
                  selsq();
                  if (Math.max(sqgroup) == sqch6 && sqcap6 == "Empty") {
                    document.body.classList.add("sq6-cpu");
                    sqcap6 = "CPU";
                } else if (Math.max(sqgroup) == sqch6 && sqcap6 != "Empty" || Math.max(sqgroup) != sqch6) {
                    sqgroup.shift();
                    selsq();
                    if (Math.max(sqgroup) == sqch7 && sqcap7 == "Empty") {
                      document.body.classList.add("sq7-cpu");
                      sqcap7 = "CPU";
                    } else if (Math.max(sqgroup) == sqch7 && sqcap7 != "Empty" || Math.max(sqgroup) != sqch7) {
                      sqgroup.shift();
                      selsq();
                      if (Math.max(sqgroup) == sqch8 && sqcap8 == "Empty") {
                        document.body.classList.add("sq8-cpu");
                        sqcap8 = "CPU";
                      } else if (Math.max(sqgroup) == sqch8 && sqcap8 != "Empty" || Math.max(sqgroup) != sqch8) {
                          sqgroup.shift();
                          selsq();
                          if (Math.max(sqgroup) == sqch9 && sqcap9 == "Empty") {
                            document.body.classList.add("sq9-cpu");
                            sqcap9 = "CPU";
                        } else if (Math.max(sqgroup) == sqch9 && sqcap9 != "Empty" || Math.max(sqgroup) != sqch9) {
                            sqgroup.shift();
                            selsq();
                        }
                      }
                    }
                }
              }
            }
        }
      }
    };
  } else if (last == 3) {
    sqgroup = [];
    sqch1=Math.floor(Math.random()*Math.floor(62)+1);
    sqch2=Math.floor(Math.random()*Math.floor(72)+1);
    sqch3=Math.floor(Math.random()*Math.floor(79)+1);
    sqch4=Math.floor(Math.random()*Math.floor(57)+1);
    sqch5=Math.floor(Math.random()*Math.floor(70)+1);
    sqch6=Math.floor(Math.random()*Math.floor(71)+1);
    sqch7=Math.floor(Math.random()*Math.floor(12)+1);
    sqch8=Math.floor(Math.random()*Math.floor(24)+1);
    sqch9=Math.floor(Math.random()*Math.floor(30)+1);
    sqch1.push(sqgroup);
    sqch2.push(sqgroup);
    sqch3.push(sqgroup);
    sqch4.push(sqgroup);
    sqch5.push(sqgroup);
    sqch6.push(sqgroup);
    sqch7.push(sqgroup);
    sqch8.push(sqgroup);
    sqch9.push(sqgroup);
    if (Math.max(sqgroup) == sqch1 && sqcap1 == "Empty") {
      document.body.classList.add("sq1-cpu");
      sqcap1 = "CPU";
    } else if (Math.max(sqgroup) == sqch1 && sqcap1 != "Empty" || Math.max(sqgroup) != sqch1) {
      sqgroup.shift();
      selsq();
      if (Math.max(sqgroup) == sqch2 && sqcap2 == "Empty") {
        document.body.classList.add("sq2-cpu");
        sqcap2 = "CPU";
      } else if (Math.max(sqgroup) == sqch2 && sqcap2 != "Empty" || Math.max(sqgroup) != sqch2) {
          sqgroup.shift();
          selsq();
          if (Math.max(sqgroup) == sqch3 && sqcap3 == "Empty") {
            document.body.classList.add("sq3-cpu");
            sqcap3 = "CPU";
        } else if (Math.max(sqgroup) == sqch3 && sqcap3 != "Empty" || Math.max(sqgroup) != sqch3) {
            sqgroup.shift();
            selsq();
            if (Math.max(sqgroup) == sqch4 && sqcap4 == "Empty") {
              document.body.classList.add("sq4-cpu");
              sqcap4 = "CPU";
            } else if (Math.max(sqgroup) == sqch4 && sqcap4 != "Empty" || Math.max(sqgroup) != sqch4) {
              sqgroup.shift();
              selsq();
              if (Math.max(sqgroup) == sqch5 && sqcap5 == "Empty") {
                document.body.classList.add("sq5-cpu");
                sqcap5 = "CPU";
              } else if (Math.max(sqgroup) == sqch5 && sqcap5 != "Empty" || Math.max(sqgroup) != sqch5) {
                  sqgroup.shift();
                  selsq();
                  if (Math.max(sqgroup) == sqch6 && sqcap6 == "Empty") {
                    document.body.classList.add("sq6-cpu");
                    sqcap6 = "CPU";
                } else if (Math.max(sqgroup) == sqch6 && sqcap6 != "Empty" || Math.max(sqgroup) != sqch6) {
                    sqgroup.shift();
                    selsq();
                    if (Math.max(sqgroup) == sqch7 && sqcap7 == "Empty") {
                      document.body.classList.add("sq7-cpu");
                      sqcap7 = "CPU";
                    } else if (Math.max(sqgroup) == sqch7 && sqcap7 != "Empty" || Math.max(sqgroup) != sqch7) {
                      sqgroup.shift();
                      selsq();
                      if (Math.max(sqgroup) == sqch8 && sqcap8 == "Empty") {
                        document.body.classList.add("sq8-cpu");
                        sqcap8 = "CPU";
                      } else if (Math.max(sqgroup) == sqch8 && sqcap8 != "Empty" || Math.max(sqgroup) != sqch8) {
                          sqgroup.shift();
                          selsq();
                          if (Math.max(sqgroup) == sqch9 && sqcap9 == "Empty") {
                            document.body.classList.add("sq9-cpu");
                            sqcap9 = "CPU";
                        } else if (Math.max(sqgroup) == sqch9 && sqcap9 != "Empty" || Math.max(sqgroup) != sqch9) {
                            sqgroup.shift();
                            selsq();
                        }
                      }
                    }
                }
              }
            }
        }
      }
    };
  } else if (last == 4) {
    sqgroup = [];
    sqch1=Math.floor(Math.random()*Math.floor(74)+1);
    sqch2=Math.floor(Math.random()*Math.floor(72)+1);
    sqch3=Math.floor(Math.random()*Math.floor(54)+1);
    sqch4=Math.floor(Math.random()*Math.floor(84)+1);
    sqch5=Math.floor(Math.random()*Math.floor(75)+1);
    sqch6=Math.floor(Math.random()*Math.floor(43)+1);
    sqch7=Math.floor(Math.random()*Math.floor(73)+1);
    sqch8=Math.floor(Math.random()*Math.floor(71)+1);
    sqch9=Math.floor(Math.random()*Math.floor(31)+1);
    sqch1.push(sqgroup);
    sqch2.push(sqgroup);
    sqch3.push(sqgroup);
    sqch4.push(sqgroup);
    sqch5.push(sqgroup);
    sqch6.push(sqgroup);
    sqch7.push(sqgroup);
    sqch8.push(sqgroup);
    sqch9.push(sqgroup);
    if (Math.max(sqgroup) == sqch1 && sqcap1 == "Empty") {
      document.body.classList.add("sq1-cpu");
      sqcap1 = "CPU";
    } else if (Math.max(sqgroup) == sqch1 && sqcap1 != "Empty" || Math.max(sqgroup) != sqch1) {
      sqgroup.shift();
      selsq();
      if (Math.max(sqgroup) == sqch2 && sqcap2 == "Empty") {
        document.body.classList.add("sq2-cpu");
        sqcap2 = "CPU";
      } else if (Math.max(sqgroup) == sqch2 && sqcap2 != "Empty" || Math.max(sqgroup) != sqch2) {
          sqgroup.shift();
          selsq();
          if (Math.max(sqgroup) == sqch3 && sqcap3 == "Empty") {
            document.body.classList.add("sq3-cpu");
            sqcap3 = "CPU";
        } else if (Math.max(sqgroup) == sqch3 && sqcap3 != "Empty" || Math.max(sqgroup) != sqch3) {
            sqgroup.shift();
            selsq();
            if (Math.max(sqgroup) == sqch4 && sqcap4 == "Empty") {
              document.body.classList.add("sq4-cpu");
              sqcap4 = "CPU";
            } else if (Math.max(sqgroup) == sqch4 && sqcap4 != "Empty" || Math.max(sqgroup) != sqch4) {
              sqgroup.shift();
              selsq();
              if (Math.max(sqgroup) == sqch5 && sqcap5 == "Empty") {
                document.body.classList.add("sq5-cpu");
                sqcap5 = "CPU";
              } else if (Math.max(sqgroup) == sqch5 && sqcap5 != "Empty" || Math.max(sqgroup) != sqch5) {
                  sqgroup.shift();
                  selsq();
                  if (Math.max(sqgroup) == sqch6 && sqcap6 == "Empty") {
                    document.body.classList.add("sq6-cpu");
                    sqcap6 = "CPU";
                } else if (Math.max(sqgroup) == sqch6 && sqcap6 != "Empty" || Math.max(sqgroup) != sqch6) {
                    sqgroup.shift();
                    selsq();
                    if (Math.max(sqgroup) == sqch7 && sqcap7 == "Empty") {
                      document.body.classList.add("sq7-cpu");
                      sqcap7 = "CPU";
                    } else if (Math.max(sqgroup) == sqch7 && sqcap7 != "Empty" || Math.max(sqgroup) != sqch7) {
                      sqgroup.shift();
                      selsq();
                      if (Math.max(sqgroup) == sqch8 && sqcap8 == "Empty") {
                        document.body.classList.add("sq8-cpu");
                        sqcap8 = "CPU";
                      } else if (Math.max(sqgroup) == sqch8 && sqcap8 != "Empty" || Math.max(sqgroup) != sqch8) {
                          sqgroup.shift();
                          selsq();
                          if (Math.max(sqgroup) == sqch9 && sqcap9 == "Empty") {
                            document.body.classList.add("sq9-cpu");
                            sqcap9 = "CPU";
                        } else if (Math.max(sqgroup) == sqch9 && sqcap9 != "Empty" || Math.max(sqgroup) != sqch9) {
                            sqgroup.shift();
                            selsq();
                        }
                      }
                    }
                }
              }
            }
        }
      }
    };
  } else if (last == 5) {
    sqgroup = [];
    sqch1=Math.floor(Math.random()*Math.floor(72)+1);
    sqch2=Math.floor(Math.random()*Math.floor(74)+1);
    sqch3=Math.floor(Math.random()*Math.floor(71)+1);
    sqch4=Math.floor(Math.random()*Math.floor(75)+1);
    sqch5=Math.floor(Math.random()*Math.floor(80)+1);
    sqch6=Math.floor(Math.random()*Math.floor(76)+1);
    sqch7=Math.floor(Math.random()*Math.floor(70)+1);
    sqch8=Math.floor(Math.random()*Math.floor(73)+1);
    sqch9=Math.floor(Math.random()*Math.floor(69)+1);
    sqch1.push(sqgroup);
    sqch2.push(sqgroup);
    sqch3.push(sqgroup);
    sqch4.push(sqgroup);
    sqch5.push(sqgroup);
    sqch6.push(sqgroup);
    sqch7.push(sqgroup);
    sqch8.push(sqgroup);
    sqch9.push(sqgroup);
    if (Math.max(sqgroup) == sqch1 && sqcap1 == "Empty") {
      document.body.classList.add("sq1-cpu");
      sqcap1 = "CPU";
    } else if (Math.max(sqgroup) == sqch1 && sqcap1 != "Empty" || Math.max(sqgroup) != sqch1) {
      sqgroup.shift();
      selsq();
      if (Math.max(sqgroup) == sqch2 && sqcap2 == "Empty") {
        document.body.classList.add("sq2-cpu");
        sqcap2 = "CPU";
      } else if (Math.max(sqgroup) == sqch2 && sqcap2 != "Empty" || Math.max(sqgroup) != sqch2) {
          sqgroup.shift();
          selsq();
          if (Math.max(sqgroup) == sqch3 && sqcap3 == "Empty") {
            document.body.classList.add("sq3-cpu");
            sqcap3 = "CPU";
        } else if (Math.max(sqgroup) == sqch3 && sqcap3 != "Empty" || Math.max(sqgroup) != sqch3) {
            sqgroup.shift();
            selsq();
            if (Math.max(sqgroup) == sqch4 && sqcap4 == "Empty") {
              document.body.classList.add("sq4-cpu");
              sqcap4 = "CPU";
            } else if (Math.max(sqgroup) == sqch4 && sqcap4 != "Empty" || Math.max(sqgroup) != sqch4) {
              sqgroup.shift();
              selsq();
              if (Math.max(sqgroup) == sqch5 && sqcap5 == "Empty") {
                document.body.classList.add("sq5-cpu");
                sqcap5 = "CPU";
              } else if (Math.max(sqgroup) == sqch5 && sqcap5 != "Empty" || Math.max(sqgroup) != sqch5) {
                  sqgroup.shift();
                  selsq();
                  if (Math.max(sqgroup) == sqch6 && sqcap6 == "Empty") {
                    document.body.classList.add("sq6-cpu");
                    sqcap6 = "CPU";
                } else if (Math.max(sqgroup) == sqch6 && sqcap6 != "Empty" || Math.max(sqgroup) != sqch6) {
                    sqgroup.shift();
                    selsq();
                    if (Math.max(sqgroup) == sqch7 && sqcap7 == "Empty") {
                      document.body.classList.add("sq7-cpu");
                      sqcap7 = "CPU";
                    } else if (Math.max(sqgroup) == sqch7 && sqcap7 != "Empty" || Math.max(sqgroup) != sqch7) {
                      sqgroup.shift();
                      selsq();
                      if (Math.max(sqgroup) == sqch8 && sqcap8 == "Empty") {
                        document.body.classList.add("sq8-cpu");
                        sqcap8 = "CPU";
                      } else if (Math.max(sqgroup) == sqch8 && sqcap8 != "Empty" || Math.max(sqgroup) != sqch8) {
                          sqgroup.shift();
                          selsq();
                          if (Math.max(sqgroup) == sqch9 && sqcap9 == "Empty") {
                            document.body.classList.add("sq9-cpu");
                            sqcap9 = "CPU";
                        } else if (Math.max(sqgroup) == sqch9 && sqcap9 != "Empty" || Math.max(sqgroup) != sqch9) {
                            sqgroup.shift();
                            selsq();
                        }
                      }
                    }
                }
              }
            }
        }
      }
    };
  } else if (last == 6) {
    sqgroup = [];
    sqch1=Math.floor(Math.random()*Math.floor(32)+1);
    sqch2=Math.floor(Math.random()*Math.floor(69)+1);
    sqch3=Math.floor(Math.random()*Math.floor(72)+1);
    sqch4=Math.floor(Math.random()*Math.floor(36)+1);
    sqch5=Math.floor(Math.random()*Math.floor(73)+1);
    sqch6=Math.floor(Math.random()*Math.floor(84)+1);
    sqch7=Math.floor(Math.random()*Math.floor(21)+1);
    sqch8=Math.floor(Math.random()*Math.floor(70)+1);
    sqch9=Math.floor(Math.random()*Math.floor(72)+1);
    sqch1.push(sqgroup);
    sqch2.push(sqgroup);
    sqch3.push(sqgroup);
    sqch4.push(sqgroup);
    sqch5.push(sqgroup);
    sqch6.push(sqgroup);
    sqch7.push(sqgroup);
    sqch8.push(sqgroup);
    sqch9.push(sqgroup);
    if (Math.max(sqgroup) == sqch1 && sqcap1 == "Empty") {
      document.body.classList.add("sq1-cpu");
      sqcap1 = "CPU";
    } else if (Math.max(sqgroup) == sqch1 && sqcap1 != "Empty" || Math.max(sqgroup) != sqch1) {
      sqgroup.shift();
      selsq();
      if (Math.max(sqgroup) == sqch2 && sqcap2 == "Empty") {
        document.body.classList.add("sq2-cpu");
        sqcap2 = "CPU";
      } else if (Math.max(sqgroup) == sqch2 && sqcap2 != "Empty" || Math.max(sqgroup) != sqch2) {
          sqgroup.shift();
          selsq();
          if (Math.max(sqgroup) == sqch3 && sqcap3 == "Empty") {
            document.body.classList.add("sq3-cpu");
            sqcap3 = "CPU";
        } else if (Math.max(sqgroup) == sqch3 && sqcap3 != "Empty" || Math.max(sqgroup) != sqch3) {
            sqgroup.shift();
            selsq();
            if (Math.max(sqgroup) == sqch4 && sqcap4 == "Empty") {
              document.body.classList.add("sq4-cpu");
              sqcap4 = "CPU";
            } else if (Math.max(sqgroup) == sqch4 && sqcap4 != "Empty" || Math.max(sqgroup) != sqch4) {
              sqgroup.shift();
              selsq();
              if (Math.max(sqgroup) == sqch5 && sqcap5 == "Empty") {
                document.body.classList.add("sq5-cpu");
                sqcap5 = "CPU";
              } else if (Math.max(sqgroup) == sqch5 && sqcap5 != "Empty" || Math.max(sqgroup) != sqch5) {
                  sqgroup.shift();
                  selsq();
                  if (Math.max(sqgroup) == sqch6 && sqcap6 == "Empty") {
                    document.body.classList.add("sq6-cpu");
                    sqcap6 = "CPU";
                } else if (Math.max(sqgroup) == sqch6 && sqcap6 != "Empty" || Math.max(sqgroup) != sqch6) {
                    sqgroup.shift();
                    selsq();
                    if (Math.max(sqgroup) == sqch7 && sqcap7 == "Empty") {
                      document.body.classList.add("sq7-cpu");
                      sqcap7 = "CPU";
                    } else if (Math.max(sqgroup) == sqch7 && sqcap7 != "Empty" || Math.max(sqgroup) != sqch7) {
                      sqgroup.shift();
                      selsq();
                      if (Math.max(sqgroup) == sqch8 && sqcap8 == "Empty") {
                        document.body.classList.add("sq8-cpu");
                        sqcap8 = "CPU";
                      } else if (Math.max(sqgroup) == sqch8 && sqcap8 != "Empty" || Math.max(sqgroup) != sqch8) {
                          sqgroup.shift();
                          selsq();
                          if (Math.max(sqgroup) == sqch9 && sqcap9 == "Empty") {
                            document.body.classList.add("sq9-cpu");
                            sqcap9 = "CPU";
                        } else if (Math.max(sqgroup) == sqch9 && sqcap9 != "Empty" || Math.max(sqgroup) != sqch9) {
                            sqgroup.shift();
                            selsq();
                        }
                      }
                    }
                }
              }
            }
        }
      }
    };
  } else if (last == 7) {
    sqgroup = [];
    sqch1=Math.floor(Math.random()*Math.floor(34)+1);
    sqch2=Math.floor(Math.random()*Math.floor(22)+1);
    sqch3=Math.floor(Math.random()*Math.floor(11)+1);
    sqch4=Math.floor(Math.random()*Math.floor(75)+1);
    sqch5=Math.floor(Math.random()*Math.floor(71)+1);
    sqch6=Math.floor(Math.random()*Math.floor(51)+1);
    sqch7=Math.floor(Math.random()*Math.floor(83)+1);
    sqch8=Math.floor(Math.random()*Math.floor(76)+1);
    sqch9=Math.floor(Math.random()*Math.floor(58)+1);
    sqch1.push(sqgroup);
    sqch2.push(sqgroup);
    sqch3.push(sqgroup);
    sqch4.push(sqgroup);
    sqch5.push(sqgroup);
    sqch6.push(sqgroup);
    sqch7.push(sqgroup);
    sqch8.push(sqgroup);
    sqch9.push(sqgroup);
    if (Math.max(sqgroup) == sqch1 && sqcap1 == "Empty") {
      document.body.classList.add("sq1-cpu");
      sqcap1 = "CPU";
    } else if (Math.max(sqgroup) == sqch1 && sqcap1 != "Empty" || Math.max(sqgroup) != sqch1) {
      sqgroup.shift();
      selsq();
      if (Math.max(sqgroup) == sqch2 && sqcap2 == "Empty") {
        document.body.classList.add("sq2-cpu");
        sqcap2 = "CPU";
      } else if (Math.max(sqgroup) == sqch2 && sqcap2 != "Empty" || Math.max(sqgroup) != sqch2) {
          sqgroup.shift();
          selsq();
          if (Math.max(sqgroup) == sqch3 && sqcap3 == "Empty") {
            document.body.classList.add("sq3-cpu");
            sqcap3 = "CPU";
        } else if (Math.max(sqgroup) == sqch3 && sqcap3 != "Empty" || Math.max(sqgroup) != sqch3) {
            sqgroup.shift();
            selsq();
            if (Math.max(sqgroup) == sqch4 && sqcap4 == "Empty") {
              document.body.classList.add("sq4-cpu");
              sqcap4 = "CPU";
            } else if (Math.max(sqgroup) == sqch4 && sqcap4 != "Empty" || Math.max(sqgroup) != sqch4) {
              sqgroup.shift();
              selsq();
              if (Math.max(sqgroup) == sqch5 && sqcap5 == "Empty") {
                document.body.classList.add("sq5-cpu");
                sqcap5 = "CPU";
              } else if (Math.max(sqgroup) == sqch5 && sqcap5 != "Empty" || Math.max(sqgroup) != sqch5) {
                  sqgroup.shift();
                  selsq();
                  if (Math.max(sqgroup) == sqch6 && sqcap6 == "Empty") {
                    document.body.classList.add("sq6-cpu");
                    sqcap6 = "CPU";
                } else if (Math.max(sqgroup) == sqch6 && sqcap6 != "Empty" || Math.max(sqgroup) != sqch6) {
                    sqgroup.shift();
                    selsq();
                    if (Math.max(sqgroup) == sqch7 && sqcap7 == "Empty") {
                      document.body.classList.add("sq7-cpu");
                      sqcap7 = "CPU";
                    } else if (Math.max(sqgroup) == sqch7 && sqcap7 != "Empty" || Math.max(sqgroup) != sqch7) {
                      sqgroup.shift();
                      selsq();
                      if (Math.max(sqgroup) == sqch8 && sqcap8 == "Empty") {
                        document.body.classList.add("sq8-cpu");
                        sqcap8 = "CPU";
                      } else if (Math.max(sqgroup) == sqch8 && sqcap8 != "Empty" || Math.max(sqgroup) != sqch8) {
                          sqgroup.shift();
                          selsq();
                          if (Math.max(sqgroup) == sqch9 && sqcap9 == "Empty") {
                            document.body.classList.add("sq9-cpu");
                            sqcap9 = "CPU";
                        } else if (Math.max(sqgroup) == sqch9 && sqcap9 != "Empty" || Math.max(sqgroup) != sqch9) {
                            sqgroup.shift();
                            selsq();
                        }
                      }
                    }
                }
              }
            }
        }
      }
    };
  } else if (last == 8) {
    sqgroup = [];
    sqch1=Math.floor(Math.random()*Math.floor(11)+1);
    sqch2=Math.floor(Math.random()*Math.floor(26)+1);
    sqch3=Math.floor(Math.random()*Math.floor(12)+1);
    sqch4=Math.floor(Math.random()*Math.floor(70)+1);
    sqch5=Math.floor(Math.random()*Math.floor(71)+1);
    sqch6=Math.floor(Math.random()*Math.floor(69)+1);
    sqch7=Math.floor(Math.random()*Math.floor(75)+1);
    sqch8=Math.floor(Math.random()*Math.floor(86)+1);
    sqch9=Math.floor(Math.random()*Math.floor(74)+1);
    sqch1.push(sqgroup);
    sqch2.push(sqgroup);
    sqch3.push(sqgroup);
    sqch4.push(sqgroup);
    sqch5.push(sqgroup);
    sqch6.push(sqgroup);
    sqch7.push(sqgroup);
    sqch8.push(sqgroup);
    sqch9.push(sqgroup);
    if (Math.max(sqgroup) == sqch1 && sqcap1 == "Empty") {
      document.body.classList.add("sq1-cpu");
      sqcap1 = "CPU";
    } else if (Math.max(sqgroup) == sqch1 && sqcap1 != "Empty" || Math.max(sqgroup) != sqch1) {
      sqgroup.shift();
      selsq();
      if (Math.max(sqgroup) == sqch2 && sqcap2 == "Empty") {
        document.body.classList.add("sq2-cpu");
        sqcap2 = "CPU";
      } else if (Math.max(sqgroup) == sqch2 && sqcap2 != "Empty" || Math.max(sqgroup) != sqch2) {
          sqgroup.shift();
          selsq();
          if (Math.max(sqgroup) == sqch3 && sqcap3 == "Empty") {
            document.body.classList.add("sq3-cpu");
            sqcap3 = "CPU";
        } else if (Math.max(sqgroup) == sqch3 && sqcap3 != "Empty" || Math.max(sqgroup) != sqch3) {
            sqgroup.shift();
            selsq();
            if (Math.max(sqgroup) == sqch4 && sqcap4 == "Empty") {
              document.body.classList.add("sq4-cpu");
              sqcap4 = "CPU";
            } else if (Math.max(sqgroup) == sqch4 && sqcap4 != "Empty" || Math.max(sqgroup) != sqch4) {
              sqgroup.shift();
              selsq();
              if (Math.max(sqgroup) == sqch5 && sqcap5 == "Empty") {
                document.body.classList.add("sq5-cpu");
                sqcap5 = "CPU";
              } else if (Math.max(sqgroup) == sqch5 && sqcap5 != "Empty" || Math.max(sqgroup) != sqch5) {
                  sqgroup.shift();
                  selsq();
                  if (Math.max(sqgroup) == sqch6 && sqcap6 == "Empty") {
                    document.body.classList.add("sq6-cpu");
                    sqcap6 = "CPU";
                } else if (Math.max(sqgroup) == sqch6 && sqcap6 != "Empty" || Math.max(sqgroup) != sqch6) {
                    sqgroup.shift();
                    selsq();
                    if (Math.max(sqgroup) == sqch7 && sqcap7 == "Empty") {
                      document.body.classList.add("sq7-cpu");
                      sqcap7 = "CPU";
                    } else if (Math.max(sqgroup) == sqch7 && sqcap7 != "Empty" || Math.max(sqgroup) != sqch7) {
                      sqgroup.shift();
                      selsq();
                      if (Math.max(sqgroup) == sqch8 && sqcap8 == "Empty") {
                        document.body.classList.add("sq8-cpu");
                        sqcap8 = "CPU";
                      } else if (Math.max(sqgroup) == sqch8 && sqcap8 != "Empty" || Math.max(sqgroup) != sqch8) {
                          sqgroup.shift();
                          selsq();
                          if (Math.max(sqgroup) == sqch9 && sqcap9 == "Empty") {
                            document.body.classList.add("sq9-cpu");
                            sqcap9 = "CPU";
                        } else if (Math.max(sqgroup) == sqch9 && sqcap9 != "Empty" || Math.max(sqgroup) != sqch9) {
                            sqgroup.shift();
                            selsq();
                        }
                      }
                    }
                }
              }
            }
        }
      }
    };
  } else if (last == 9) {
    sqgroup = [];
    sqch1=Math.floor(Math.random()*Math.floor(7)+1);
    sqch2=Math.floor(Math.random()*Math.floor(21)+1);
    sqch3=Math.floor(Math.random()*Math.floor(32)+1);
    sqch4=Math.floor(Math.random()*Math.floor(44)+1);
    sqch5=Math.floor(Math.random()*Math.floor(71)+1);
    sqch6=Math.floor(Math.random()*Math.floor(72)+1);
    sqch7=Math.floor(Math.random()*Math.floor(52)+1);
    sqch8=Math.floor(Math.random()*Math.floor(75)+1);
    sqch9=Math.floor(Math.random()*Math.floor(88)+1);
    sqch1.push(sqgroup);
    sqch2.push(sqgroup);
    sqch3.push(sqgroup);
    sqch4.push(sqgroup);
    sqch5.push(sqgroup);
    sqch6.push(sqgroup);
    sqch7.push(sqgroup);
    sqch8.push(sqgroup);
    sqch9.push(sqgroup);
    if (Math.max(sqgroup) == sqch1 && sqcap1 == "Empty") {
      document.body.classList.add("sq1-cpu");
      sqcap1 = "CPU";
    } else if (Math.max(sqgroup) == sqch1 && sqcap1 != "Empty" || Math.max(sqgroup) != sqch1) {
      sqgroup.shift();
      selsq();
      if (Math.max(sqgroup) == sqch2 && sqcap2 == "Empty") {
        document.body.classList.add("sq2-cpu");
        sqcap2 = "CPU";
      } else if (Math.max(sqgroup) == sqch2 && sqcap2 != "Empty" || Math.max(sqgroup) != sqch2) {
          sqgroup.shift();
          selsq();
          if (Math.max(sqgroup) == sqch3 && sqcap3 == "Empty") {
            document.body.classList.add("sq3-cpu");
            sqcap3 = "CPU";
        } else if (Math.max(sqgroup) == sqch3 && sqcap3 != "Empty" || Math.max(sqgroup) != sqch3) {
            sqgroup.shift();
            selsq();
            if (Math.max(sqgroup) == sqch4 && sqcap4 == "Empty") {
              document.body.classList.add("sq4-cpu");
              sqcap4 = "CPU";
            } else if (Math.max(sqgroup) == sqch4 && sqcap4 != "Empty" || Math.max(sqgroup) != sqch4) {
              sqgroup.shift();
              selsq();
              if (Math.max(sqgroup) == sqch5 && sqcap5 == "Empty") {
                document.body.classList.add("sq5-cpu");
                sqcap5 = "CPU";
              } else if (Math.max(sqgroup) == sqch5 && sqcap5 != "Empty" || Math.max(sqgroup) != sqch5) {
                  sqgroup.shift();
                  selsq();
                  if (Math.max(sqgroup) == sqch6 && sqcap6 == "Empty") {
                    document.body.classList.add("sq6-cpu");
                    sqcap6 = "CPU";
                } else if (Math.max(sqgroup) == sqch6 && sqcap6 != "Empty" || Math.max(sqgroup) != sqch6) {
                    sqgroup.shift();
                    selsq();
                    if (Math.max(sqgroup) == sqch7 && sqcap7 == "Empty") {
                      document.body.classList.add("sq7-cpu");
                      sqcap7 = "CPU";
                    } else if (Math.max(sqgroup) == sqch7 && sqcap7 != "Empty" || Math.max(sqgroup) != sqch7) {
                      sqgroup.shift();
                      selsq();
                      if (Math.max(sqgroup) == sqch8 && sqcap8 == "Empty") {
                        document.body.classList.add("sq8-cpu");
                        sqcap8 = "CPU";
                      } else if (Math.max(sqgroup) == sqch8 && sqcap8 != "Empty" || Math.max(sqgroup) != sqch8) {
                          sqgroup.shift();
                          selsq();
                          if (Math.max(sqgroup) == sqch9 && sqcap9 == "Empty") {
                            document.body.classList.add("sq9-cpu");
                            sqcap9 = "CPU";
                        } else if (Math.max(sqgroup) == sqch9 && sqcap9 != "Empty" || Math.max(sqgroup) != sqch9) {
                            sqgroup.shift();
                            selsq();
                        }
                      }
                    }
                }
              }
            }
        }
      }
    };
  }
}
button1.addEventListener('click', () => {
  if (sqcap1 == "Empty") {
    document.body.classList.add("sq1-player");
    sqcap1 = "Player";
    last = 1;
    console.log(last);
    selsq();
  } else {
    sqcap1;
  }
});
button2.addEventListener('click', () => {
  if (sqcap2 == "Empty") {
    document.body.classList.add("sq2-player");
    sqcap2 = "Player";
    last = 2;
    console.log(last);
    selsq();
  } else {
    sqcap2;
  }
});
button3.addEventListener('click', () => {
  if (sqcap3 == "Empty") {
    document.body.classList.add("sq3-player");
    sqcap3 = "Player";
    last = 3;
    console.log(last);
    selsq();
  } else {
    sqcap3;
  }
});
button4.addEventListener('click', () => {
  if (sqcap4 == "Empty") {
    document.body.classList.add("sq4-player");
    sqcap4 = "Player";
    last = 4;
    console.log(last);
    selsq();
  } else {
    sqcap4;
  }
});
button5.addEventListener('click', () => {
  if (sqcap5 == "Empty") {
    document.body.classList.add("sq5-player");
    sqcap5 = "Player";
    last = 5;
    console.log(last);
    selsq();
  } else {
    sqcap5;
  }
});
button6.addEventListener('click', () => {
  if (sqcap6 == "Empty") {
    document.body.classList.add("sq6-player");
    sqcap6 = "Player";
    last = 6;
    console.log(last);
    selsq();
  } else {
    sqcap6;
  }
});
button7.addEventListener('click', () => {
  if (sqcap7 == "Empty") {
    document.body.classList.add("sq7-player");
    sqcap7 = "Player";
    last = 7;
    console.log(last);
    selsq();
  } else {
    sqcap7;
  }
});
button8.addEventListener('click', () => {
  if (sqcap8 == "Empty") {
    document.body.classList.add("sq8-player");
    sqcap8 = "Player";
    last = 8;
    console.log(last);
    selsq();
  } else {
    sqcap8;
  }
});
button9.addEventListener('click', () => {
  if (sqcap9 == "Empty") {
    document.body.classList.add("sq9-player");
    sqcap9 = "Player";
    last = 9;
    console.log(last);
    selsq();
  } else {
    sqcap9;
  }
});
buttonR.addEventListener('click', () => {
  console.log("reset");
  sqcap1 = "Empty";
  sqcap2 = "Empty";
  sqcap3 = "Empty";
  sqcap4 = "Empty";
  sqcap5 = "Empty";
  sqcap6 = "Empty";
  sqcap7 = "Empty";
  sqcap8 = "Empty";
  sqcap9 = "Empty";
  sqch1 = 0;
  sqch2 = 0;
  sqch3 = 0;
  sqch4 = 0;
  sqch5 = 0;
  sqch6 = 0;
  sqch7 = 0;
  sqch8 = 0;
  sqch9 = 0;
  last = 0;
  sqgroup = [];
  document.body.classList.remove("sq1-player");
  document.body.classList.remove("sq2-player");
  document.body.classList.remove("sq3-player");
  document.body.classList.remove("sq4-player");
  document.body.classList.remove("sq5-player");
  document.body.classList.remove("sq6-player");
  document.body.classList.remove("sq7-player");
  document.body.classList.remove("sq8-player");
  document.body.classList.remove("sq9-player");
});